class TankScene extends Phaser.Scene {
    map;
    destructLayer;
    player;
    enemyTanks = [];
    bullets;
    enemyBullets;
    explosions;
    preload() {
        // load tank atlas 
        this.load.atlas('tank', 'assets/tanks/tanks.png', 'assets/tanks/tanks.json');
        // load bullet image
        // load explosion spritesheet
        // load tileset
        this.load.image('tileset', 'assets/tanks/landscape-tileset.png');
        // load tilemap data
        this.load.tilemapTiledJSON('tilemap', 'assets/tanks/level1.json');
    }
    create() {
        // load in the tilemap
        this.map = this.make.tilemap({ key: 'tilemap' });
        // add tileset image to map
        let landscape = this.map.addTilesetImage('landscape-tileset', 'tileset');
        // create static ground layer 
        this.map.createStaticLayer('ground', landscape);
        // create dynamic destructable layer
        // set collision by property for destructable layer
        // set camera to map bounds
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        // set physics to map bounds
        // create enemy bullets physics group
        // create player bullets physics group
        // get reference to object layer in tilemap data
        // create temporary array for enemy spawn points
        // retrieve custom properties for objects
        // spawn player
        this.createPlayer({ x: 100, y: 100 });
        // spawn enemies after player
        // create explosion animation
        // create explosions physics group
        // listen to pointer down to trigger player shoot
        // camera follow player
        this.cameras.main.startFollow(this.player.hull, true, 0.5, 0.5);
        // listen for worldbounds event, dispose of bullets that reach world bounds
    }
    update(time, delta) {
        // update player
        this.player.update();
        // update enemies
    }
    createPlayer(object) {
        // object has x and y props
        this.player = new PlayerTank(this, object.x, object.y, 'tank', 'tank1');
        // create player tank
        // enable player collision with destructable layer
    }
    createEnemy(object) {
        // object has x and y props
        // create temp ref for enemy tank
        // create enemy tank 
        // enable enemy collision with destructable layer
        // set enemy bullets
        // add latest enemy tank to enemy tanks array
        // add collider between latest enemy and player
        // add collider between latest enemy and all other enemies
    }
    tryShoot(pointer) {
        // check whether a bullet is available from group
        // if so, place on player and call fireBullet
    }
    fireBullet(bullet, rotation, target) {
        // fyi bullet is a Sprite
        // set z index of bullet to appear above tank hull but below turret
        // set bullet collision with world bounds
        // activate onworldbounds event for bullet 
        // enable bullet: activate physics, make visible
        // set bullet rotation
        // set velocity from rotation
        // add collider between bullet and destructable layer
        // if target is player, check for overlap with player
        // else check for overlap with all enemy tanks
    }
    bulletHitPlayer(hull, bullet) {
        // call disposeOfBullet
        // damage player
        // if player destroyed, end game, play explosion animation
    }
    disposeOfBullet(bullet) {
        // remove bullet from physics system, make invisible
    }
    bulletHitEnemy(hull, bullet) {
        // call disposeOfBullet
        // loop though enemy tanks array and find enemy tank that has been hit
        // damage enemy
        // place explosion
        // call activateExplosion
        // listen for animation complete, call animComplete
        // play explosion animation
        // if enemy is destroyed, remove from enemy tanks array
    }
    damageWall(bullet, tile) {
        // call disposeOfBullet
        // retrieve tileset firstgid (used as an offset)
        // retrieve custom props for next tile in set (this is the tile id in Tiled)
        // set new tile using Phaser version of tile id
        // tile may not have custom props, so check these exist, if so set collision
    }
    animComplete(animation, frame, gameObject) {
        // disable and return the explosion sprite to the explosions pool
    }
    activateExplosion(explosion) {
        // set z index of explosion above everything else
        // activate explosion
    }
}