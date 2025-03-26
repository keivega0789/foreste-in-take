// ページロード時の処理
window.addEventListener('load', () => {
	setTimeout(() => document.body.classList.remove('fadeout'), 800); // 0.8秒の遅延
});

// DOMコンテンツがロードされた後の処理
document.addEventListener('DOMContentLoaded', () => {
	// ハッシュリンク(#)と別ウィンドウで開くリンクをスルー
	document
		.querySelectorAll('a:not([href^="#"]):not([target])')
		.forEach((link) =>
			link.addEventListener('click', (e) => {
				e.preventDefault(); // ナビゲートをキャンセル
				const url = link.getAttribute('href'); // 遷移先のURLを取得
				if (url) {
					document.body.classList.add('fadeout'); // bodyに "fadeout" クラスを追加
					setTimeout(() => (window.location = url), 800); // 0.8秒後に遷移
				}
			})
		);
});
