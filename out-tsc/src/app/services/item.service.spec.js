"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var item_service_1 = require("./item.service");
describe('ItemService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [item_service_1.ItemService]
        });
    });
    it('should be created', testing_1.inject([item_service_1.ItemService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=item.service.spec.js.map