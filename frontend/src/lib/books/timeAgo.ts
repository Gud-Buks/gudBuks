export function timeAgo(fromDate: Date): string {
	console.log(fromDate);
	const timeDifference: number = Math.floor((new Date().getTime() - fromDate.getTime()) / 1000);
	const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(navigator.language, {
		numeric: 'auto'
	});

	if (timeDifference < 60) {
		return rtf.format(0, 'second'); // "just now"
	} else if (timeDifference < 3600) {
		return rtf.format(-Math.floor(timeDifference / 60), 'minute');
	} else if (timeDifference < 86400) {
		return rtf.format(-Math.floor(timeDifference / 3600), 'hour');
	} else {
		return rtf.format(-Math.floor(timeDifference / 86400), 'day');
	}
}
