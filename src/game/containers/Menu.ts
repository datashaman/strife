export class Menu extends Phaser.GameObjects.Container {
    constructor(scene, x, y, title, menuItems) {
        super(scene, x, y);

        const items = menuItems.filter(
            (menuItem) => menuItem.enabled === undefined || menuItem.enabled(),
        );

        // Menu Panel
        this.createRectangle(
            512 + 4,
            384 + 4,
            640,
            400,
            0x000000,
            0x666666,
            8,
            0.5,
        );
        this.createRectangle(512, 384, 640, 400, 0xc5a84d, 0xffd700, 8);

        // Menu Title
        this.createRectangle(512 + 4, 192 + 4, 256, 64, 0x000000, 0x666666, 8);
        this.createRectangle(512, 192, 256, 64, 0x4a2e17, 0x997358, 8);

        this.scene.add
            .text(512, 192, title, {
                fontFamily: "Arial Black",
                fontSize: 32,
                color: "#FFD700",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5, 0.5);

        menuItems.forEach(this.createMenuItem.bind(this));

        this.scene.add.existing(this);
    }

    // preUpdate(time, delta) {}

    createMenuItem(menuItem: { text: string; scene: string }, i: number) {
        this.createRectangle(
            512 + 4,
            290 + i * 76 + 4,
            384,
            64,
            0x444444,
            0x444444,
            0,
        );

        this.createRectangle(512, 290 + i * 76, 384, 64, 0x666633, 0x333333, 2)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.scene.start(menuItem.scene);
            });

        this.scene.add
            .text(512, 290 + i * 76, menuItem.text, {
                fontFamily: "Arial Black",
                fontSize: 24,
                color: "#FFD700",
                stroke: "#333333",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5, 0.5);
    }

    createRectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        color: number,
        strokeColor: null | number,
        strokeSize: null | number,
        alpha: null | number = 1,
    ) {
        const rectangle = this.scene.add.rectangle(x, y, width, height, color);

        if (strokeSize && strokeColor) {
            rectangle.setStrokeStyle(strokeSize, strokeColor, alpha);
        }

        return rectangle;
    }
}
