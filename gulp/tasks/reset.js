const reset = () => {
	return app.plugins.deleteAsync(app.path.clean);
};

const resetServer = () => {
	return app.plugins.deleteAsync(app.path.cleanServerFolder, { force: true });
};

export { reset, resetServer };
