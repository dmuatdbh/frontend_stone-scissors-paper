import {ResouceService} from "./ResouceService";

export class SettingsService extends ResouceService{

    private static readonly PATH: string = "settings/";

    public static async get(servicePath: string) {
        return ResouceService.call(SettingsService.PATH + servicePath, "GET");
    }
}
