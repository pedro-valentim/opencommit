import { jest } from '@jest/globals';
import 'cli-testing-library/extend-expect';
import { configure } from 'cli-testing-library';

global.jest = jest;

/**
 * Adjusted the wait time for waitFor/findByText to 2000ms, because the default 1000ms makes the test results flaky
 */
configure({ asyncUtilTimeout: 2000 });
