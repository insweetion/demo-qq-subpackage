const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    public label: cc.Label = null;

    // public onLoad(): void
    // {}

    // public onDestroy(): void
    // {}

    // public onEnable(): void
    // {}

    // public onDisable(): void
    // {}

    public start(): void
    {
        console.log("Main Scene start");

        console.log(this.label);
    }

    // public update(dt): void
    // {}

    // public update(dt: number): void
    // {}

    // public lateUpdate(dt: number): void
    // {}
}
