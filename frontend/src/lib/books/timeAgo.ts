export function timeAgo(fromDate: Date) {
	const timeDifference = Math.floor((new Date().getTime() - fromDate.getTime()) / 1000);
	const rtf = new Intl.RelativeTimeFormat(navigator.language, {
		numeric: 'auto'
	});

	if (timeDifference < 60) {
		return rtf.format(-timeDifference, 'second');
	} else if (timeDifference < 3600) {
		return rtf.format(-Math.floor(timeDifference / 60), 'minute');
	} else if (timeDifference < 86400) {
		return rtf.format(-Math.floor(timeDifference / 3600), 'hour');
	} else {
		return rtf.format(-Math.floor(timeDifference / 86400), 'day');
	}
}
