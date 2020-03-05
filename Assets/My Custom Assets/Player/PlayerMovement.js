#pragma strict

var rb : Rigidbody;

var forwardForce = 2000f;
var sidewayForce = 100f;

// We marked this as "Fixed"Update because we
// are using it to mess with physics.
function FixedUpdate () {
	
	rb.AddForce(0, 0, forwardForce * Time.deltaTime);
	
	if (Input.GetKey("d")) {
		rb.AddForce(sidewayForce * Time.deltaTime, 0, 0, ForceMode.VelocityChange);
	}
	
	if (Input.GetKey("a")) {
		rb.AddForce(-sidewayForce * Time.deltaTime, 0, 0, ForceMode.VelocityChange);
	}
}
