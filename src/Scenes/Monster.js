class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rightArmX = this.bodyX +70;
        this.rightArmY = this.bodyY +30;

        this.leftArmX = this.bodyX -70;
        this.leftArmY = this.bodyY +30;
        
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 20;

        this.rightLegX = this.bodyX +50;
        this.rightLegY = this.bodyY +100;

        this.leftLegX = this.bodyX -50;
        this.leftLegY = this.bodyY +100;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY+40;

        this.rightHornX = this.bodyX +35;
        this.rightHornY = this.bodyY -85;

        this.leftHornX = this.bodyX -35;
        this.leftHornY = this.bodyY -85;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkD.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_darkD.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkB.png");
        
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_darkE.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_darkE.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_red.png");

        my.sprite.mouth = this.add.sprite(this.mouthX,this.mouthY, "monsterParts", "mouthA.png");

        my.sprite.rightHorn=this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.leftHorn=this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.fang.visible = false;

        //Event input: dimple smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        });

        //Event input: regular smile
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) {
            for(let key in my.sprite){
                my.sprite[key].x -= 1;
            }
        }
        if(this.dKey.isDown){
            for(let key in my.sprite){
                my.sprite[key].x += 1;
            }
        }
       
    }

}