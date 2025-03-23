export class Confirm extends Phaser.GameObjects.Container {
    constructor(scene, x, y, width, height, message, onConfirm, onCancel) {
        super(scene, x, y);

        this.createRectangle(x + 4, y + 4, width, height, 0x000000, 0x000000, 0, 0.5);
        this.createRectangle(x, y, width, height, 0x00FF00, 0x00FF00, 0, 0.5);

        this.scene.add.text(x, y - 24, message, {
            fontFamily: "Arial Black",
            fontSize: 16,
            color: "#000000",
            stroke: "#00FF00",
            strokeThickness: 8,
            align: "center",
        }).setOrigin(0.5, 0.5);

        this.createRectangle(x - 64, y + 32, 128, 64, 0x000000, 0x000000, 0, 0.5);
        this.createRectangle(x - 64, y + 32, 128, 64, 0x00FF00, 0x00FF00, 0, 0.5)
            .setInteractive()
            .on("pointerdown", () => {
                onConfirm();
            });

        this.scene.add.text(x, y + 32, "Yes", {
            fontFamily: "Arial Black",
            fontSize: 16,
            color: "#000000",
            stroke: "#00FF00",
            strokeThickness: 8,
            align: "center",
        });

        this.createRectangle(x + 64, y + 32, 128, 64, 0x000000, 0x000000, 0, 0.5);
        this.createRectangle(x + 64, y + 32, 128, 64, 0x00FF00, 0x00FF00, 0, 0.5)
            .setInteractive()
            .on("pointerdown", () => {
                onCancel();
            });

        this.scene.add.text(x + 64, y + 32, "No", {
            fontFamily: "Arial Black",
            fontSize: 16,
            color: "#000000",
            stroke: "#00FF00",
            strokeThickness: 8,
            align: "center",
        });

        scene.add.existing(this);
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
