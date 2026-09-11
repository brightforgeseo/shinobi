// Nitro bundles PGLite JS into _libs but omits its adjacent runtime binaries.
// Preserve the database behaviour; package the vendor assets beside that bundle.
import { copyFile, access } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

if (process.env.NITRO_PRESET === 'netlify') {
  const destination = '.netlify/functions-internal/server/_libs';
  await access(join(destination, 'electric-sql__pglite.mjs'));
  const require = createRequire(import.meta.url);
  const source = dirname(require.resolve('@electric-sql/pglite'));
  for (const file of ['pglite.data', 'pglite.wasm', 'initdb.wasm']) {
    await copyFile(join(source, file), join(destination, file));
    console.log(`[netlify] Packaged PGLite runtime asset: ${file}`);
  }
}
