hexo.extend.filter.register('after_post_render', function(data) {
	var gitalkConfig = hexo.config.plugins.gitalk;
	if (gitalkConfig) {		
		data.content = data.content + '\n<div id="gitalk-container"></div>\n<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css"><script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>';

		var str = '<script>new Gitalk('+JSON.stringify(gitalkConfig)+').render("gitalk-container")'+'</script>';

		data.content = data.content + '\n' + str;
	}

	return data;
});