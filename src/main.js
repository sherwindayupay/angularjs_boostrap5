//import * as bootstrap from "bootstrap";
import angular from "angular";
import AdmonModule from "./admin/admin.module";
import TestService from "./services/test.service";
import TestFilter from "./filters/test.filter";
import BoldText from "./directives/test.directives";
import TestConstant from "./constants/test.constats";
import "./styles.scss";

const modules = [AdmonModule, TestService, TestFilter, BoldText, TestConstant];
export default angular.module("ngApp", modules).name;
