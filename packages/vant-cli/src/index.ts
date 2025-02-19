// @ts-ignore
import fs from 'node:fs';
import { URL, fileURLToPath } from 'node:url';
import { logger } from 'rslog';

const packagePath = fileURLToPath(new URL('../package.json', import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
export const cliVersion: string = packageJson.version;

logger.greet(`  Vant CLI v${cliVersion}\n`);

process.env.VANT_CLI_VERSION = cliVersion;
