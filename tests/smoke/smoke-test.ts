import type { Options } from 'k6/options';
import { runPublicPostsFlow } from '../../helpers/utils.ts';

export const options: Options = {
    vus:1 ,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<800'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>0.99'],
    },
};

export default function (): void {
    runPublicPostsFlow();
}

export function handleSummary(data) {
  return {
    "reports/smoke-summary.json": JSON.stringify(data),
  };
}