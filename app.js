// Initialising TimelineMax
const tl = new TimelineMax();
// Adding Label
tl.add("flow");
// Water Falling Down
tl.from(
	"#flowingWater",
	4,
	{
		y: -500
	},
	"flow"
);
// Water Falling Effect Moving Down
tl.fromTo(
	"#flowEffect1,#flowEffect2,#flowLines",
	3,
	{
		y: -500,
		opacity: 1,
		repeat: 3,
		repeatDelay: -0.5
	},
	{
		y: 300,
		opacity: 0,
		repeat: 2,
		repeatDelay: -0.5
	},
	"flow"
);
// Filling Water
tl.from(
	"#waterFilled",
	12,
	{
		y: 500
	},
	"flow-=2"
);
// As Soon as  container gets filled Tap gets Automatic close 
// and water which is already out of tap get collects in container 
tl.to(
	"#flowingWater",
	2,
	{
		y: 500
	},
	"flow+=11"
);
