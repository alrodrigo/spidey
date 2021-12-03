
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"fondo2.png");
        me.load.spritesheet("tela","telara.png",257.8,189);
		me.load.spritesheet("spider","sp.png",339,270);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
        me.tela= me.game.add.sprite(150,100,"tela");
		me.tela.animations.add("right",[0,1,2,3,4],5,true);
		me.tela.animations.play("right");
		me.spider=me.game.add.sprite(200,350,"spider");
		me.spider.animations.add("right",[0,1,2,3],9,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.spider.animations.play("right");
    },
    update: function() {
		var me=this;
		me.spider.x+=1;
		me.tela.x+=2;
		if(me.spider.x>=me.game.world.width){
			me.spider.x=-100;
			}
        if(me.tela.x>=me.game.world.width){
			me.tela.x=-100;
			}
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");