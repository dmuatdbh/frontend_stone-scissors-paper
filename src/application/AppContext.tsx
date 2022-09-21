export class AppContext {

    private static theInstance: AppContext;

    public static get(): AppContext {
        if (!AppContext.theInstance) {
            AppContext.theInstance = new AppContext();
        }
        return AppContext.theInstance;
    }

    get botId(): any {
        return this._botId;
    }

    set botId(value: any) {
        this._botId = value;
    }

    get playerId(): any {
        return this._playerId;
    }

    set playerId(value: any) {
        this._playerId = value;
    }

    get symbols(): string[] | undefined {
        return this._symbols;
    }

    set symbols(value: string[] | undefined) {
        this._symbols = value;
    }

    private _botId = undefined;
    private _playerId = undefined;
    private _symbols: string[] | undefined;
}
