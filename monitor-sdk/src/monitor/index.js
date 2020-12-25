import { injectJsError } from "./lib/jsError";
import { injectXHR } from "./lib/xhr";
import {blankScreen} from "./lib/blankScreen"
import {timing} from "./lib/timing"

injectJsError();
injectXHR();
blankScreen();//页面上选取点 看点是不是空白的
timing();
