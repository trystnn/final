sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setImage(assets.image`Grunt`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ninja,
    [img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.....cc..
        fefe44ebbf44eef...ccdc..
        .fee4d4bbfddef..ccddcc..
        ..feee4dddddfeecdddc....
        ...f2222222eeddcdcc.....
        ...f444445e44ddccc......
        ...ffffffffeeee.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f..ccc....
        fffffffffeeefff..cdc....
        fefe44ebbf44eef.cdc.....
        .fee4d4bbfddef..cdc.....
        ..feee4dddddfeecddc.....
        ...f2222222eeddcdc......
        ...f444445e44ddcc.......
        ...ffffffffeeee.........
        ...fff...ff.............
        ....................cc..
        ..................ccdc..
        ................ccddcc..
        ................dddc....
        ................dcc.....
        ................cc......
        ........................
        ........................
        `],
    500,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ninja.vy = -50
})
let ninja: Sprite = null
scene.setBackgroundImage(assets.image`Forest Background`)
tiles.setTilemap(tilemap`level1`)
ninja = sprites.create(assets.image`Ninja`, SpriteKind.Player)
controller.moveSprite(ninja, 100, 0)
ninja.ay = 250
tiles.placeOnTile(ninja, tiles.getTileLocation(4, 6))
scene.cameraFollowSprite(ninja)
let grunt = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
grunt.setFlag(SpriteFlag.Invisible, true)
info.setLife(3)
game.splash("Press 'A\" to Jump", "left and right to move")
