import {fetchPost,fetchGet} from './axios' 
// import { Indicator } from 'mint-ui';
export const add = p => fetchPost('h5api/V1/index/homePage1', p,"add");
export const fn = p => fetchGet('h5api/v1/qit/course_index', p,"fn");