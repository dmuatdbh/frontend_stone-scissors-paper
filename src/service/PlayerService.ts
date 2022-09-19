import {ResouceService} from "./ResouceService";

export class PlayerService extends ResouceService{

    private static readonly PATH: string = "players/";

    public static async put(servicePath: string) {
        return ResouceService.call(PlayerService.PATH + servicePath, "PUT");
    }

    public static async get(servicePath: string) {
        return ResouceService.call(PlayerService.PATH + servicePath, "GET");
    }

    public static async patch(servicePath: string) {
        return ResouceService.call(PlayerService.PATH + servicePath, "PATCH");
    }
}
