import http from 'k6/http';
import { check, sleep } from 'k6';
import { ENV } from '../config/environments.ts';
import { ENDPOINTS } from '../config/endpoints.ts';
import { login } from './auth.ts';

export const jsonHeaders: Record<string, string> = {
    'content-type': 'application/json',
    'Accept': 'application/json',
};

export function runPublicPostsFlow(): void {
    const token = login();
    check(token, {
        'login return token': (t) => t !== null && t.length > 0,
    });

    if (!token) {
        sleep(1);
        return;
    }

    sleep(1);

    const postsRes = http.get(`${ENV.BASE_URL}${ENDPOINTS.BLOG.PUBLIC_POSTS}?per_page=50`, { headers: jsonHeaders });
    check(postsRes, {
        'post status 200': (r) => r.status === 200,
        'posts response time < 800 ms': (r) => r.timings.duration < 800,
    });
    sleep(1);
}