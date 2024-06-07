//	black_hole
// MDN cc 2024
s0.initVideo("https://media0.giphy.com/media/YZdNFzYZIEi0cCaSpn/giphy.mp4")
s1.initVideo("https://media3.giphy.com/media/5kPbL5CKuaKcysKzpb/giphy.mp4")
s2.initVideo("https://media2.giphy.com/media/fdd85RxytnbqU58hwP/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/FoW0Gxurx5dLwzCqqj/giphy.mp4")
src(s2)
	.add(s1)
.scale([1,2,3],[1,2,3])
	//.pixelate(90, 90)
	//.invert()
.diff(src(o0).scale(0.9))
	.out(o0)
render(o0)
