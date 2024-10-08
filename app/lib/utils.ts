import showdown from 'showdown';
import parse from 'html-react-parser';

export function imageSize(image: any) {
	return new Promise((resolve, reject) => {
		try {
			const fileReader = new FileReader();

			fileReader.onload = () => {
				const img = new Image();

				img.onload = () => {
					resolve({ width: img.width, height: img.height, src: img.src });
				};

				img.src = String(fileReader.result);
			};

			fileReader.readAsDataURL(image);
		} catch (e) {
			reject(e);
		}
	});
}

export function IMGtoURL(imageData: any) {
	let w = imageData.width;
	let h = imageData.height;
	let canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	let ctx = canvas.getContext('2d');
	ctx!.putImageData(imageData, 0, 0);

	return canvas.toDataURL();
}

export function ModifyData(props: any) {
	//*Markdown the chatbot response
	const { text } = props;
	const converter = new showdown.Converter();

	//*Parse to html element
	return parse(converter.makeHtml(text));
}
