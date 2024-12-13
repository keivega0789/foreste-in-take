window.addEventListener('load', () => {
	setTimeout(() => {
		document.body.classList.remove('fadeout');
	}, 800); // 0.8秒（800ミリ秒）の遅延
});

$(() => {
	// ハッシュリンク(#)と別ウィンドウで開くリンクをスルー
	$('a:not([href^="#"]):not([target])').on('click', (e) => {
		e.preventDefault(); // ナビゲートをキャンセル
		const url = $(e.currentTarget).attr('href'); // 遷移先のURLを取得
		if (url) {
			$('body').addClass('fadeout'); // bodyに class="fadeout"を挿入
			setTimeout(() => {
				window.location = url; // 0.8秒後に取得したURLに遷移
			}, 800);
		}
	});
});
