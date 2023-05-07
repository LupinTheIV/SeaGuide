class AnimaCharacter extends Phaser.Scene{
    constructor(){
        super();
    }

    preload(){

        this.load.image('bg', 'img/apartamento.png');
        this.load.path = './animations/';
        this.load.atlas('character', 'character.png', 'character.json');
        //this.load.atlas('animations/character', 'animations/character.png', 'animations/character.json');
    }
    create(){
        this.add.image(1000, 544, 'bg');
        const character = this.add.sprite(630, 1000, 'character');

        //walkdown
        character.anims.create({
            key: 'walkDown',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-1-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'walkDown',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-1-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        //walkLeft
        character.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-2-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-2-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        //walkRight
        character.anims.create({
            key: 'walkRight',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-3-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'walkRight',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-3-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        //walkUp
        character.anims.create({
            key: 'walkUp',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-4-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'walkUp',
            frames: this.anims.generateFrameNames('character', { prefix: 'fila-4-columna-', start: 1, end: 8 }),
            frameRate: 12,
            repeat: -1
        });
        var cursors = this.input.keyboard.createCursorKeys();
        //down
        var down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN, [true],[true]);
            down.on('down', function(){
                character.play('walkDown');
                character.y += 10;
            });
            down.on('up', function(){
                character.stop();
            });
        //left
        var left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, [true],[true]);
            left.on('down', function(){
                character.play('walkLeft');
                character.x -= 10;
            });
            left.on('up', function(){
                character.stop();
            });
        //right
        var right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, [true],[true]);
            right.on('down', function(){
                character.play('walkRight');
                character.x += 10;
            });
            right.on('up', function(){
                character.stop();
            });
        //Up
        var up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP, [true],[true]);
        
            up.on('down', function(){
                character.play('walkUp');
                character.y -= 10;
            });
            up.on('up', function(){
                character.stop();
            });
    }
}
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 2000,
    height: 1087,
    scene: AnimaCharacter
};
const game = new Phaser.Game(config);

