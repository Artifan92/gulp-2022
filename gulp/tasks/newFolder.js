const newFolder = done => {
	const folders = [
		'files',
		'fonts',
		'html',
		'img',
		'js',
		'js/modules',
		'scss',
		'scss/blocks',
		'svgicons',
	];
	folders.forEach(folder => {
		if (!app.plugins.fs.existsSync(folder)) {
			return app.gulp
				.src('*.*', { read: false })
				.pipe(app.gulp.dest(`${app.path.srcFolder}/${folder}`));
		}
	});
	done();
};

export default newFolder;
