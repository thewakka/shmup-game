#pragma strict

var player : Transform;
var offset : Vector3;

function Update () {

		transform.position = player.position + offset;
}
