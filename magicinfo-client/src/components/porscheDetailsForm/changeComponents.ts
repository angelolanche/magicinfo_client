import html2canvas from "html2canvas";

async function changeComponents() {
    const formContent = document.querySelector<HTMLElement>('#formId');

    if (formContent !== null) {
        const canvas = await html2canvas(formContent,
            {
                onclone: (clonedDocument) => {
                    Array.from(clonedDocument.querySelectorAll('.mainAttr')).forEach((input) => {
                        const inputEl = input as HTMLInputElement
                        const options = clonedDocument.createElement('div');
                        
                        options.innerText = inputEl.value;
                        options.style.width = '100%';
                        options.style.fontFamily = 'PorscheNextTT', 'sans-serif';
                        options.style.fontSize = '1.3rem';
                        options.style.border = 'none';
                        options.style.paddingLeft = '0.5rem';
                        options.style.cursor = 'text';

                        input.parentElement?.replaceChild(options, input);
                    })

                    Array.from(clonedDocument.querySelectorAll('textarea')).forEach((textArea) => {
                        if (!textArea.value) return;

                        const div = clonedDocument.createElement('div');

                        div.innerText = textArea.value;
                        div.style.width = '100%';
                        div.style.fontFamily = 'PorscheNextTT', 'sans-serif';
                        div.style.fontSize = '1.3rem';
                        div.style.lineHeight = '1.2rem';
                        div.style.resize = 'none';
                        div.style.outline = 'none';
                        div.style.border = 'none';

                        textArea.parentElement?.replaceChild(div, textArea);
                    })


                    Array.from(clonedDocument.querySelectorAll('.h2')).forEach((input) => {
                        const inputEl = input as HTMLInputElement
                        const h2 = clonedDocument.createElement('div');

                        h2.innerText = inputEl.value;
                        h2.style.width = '100%';
                        h2.style.fontFamily = 'PorscheNextTT', 'sans-serif';
                        h2.style.border = 'none';
                        h2.style.cursor = 'text';
                        h2.style.fontSize = '3rem';
                        h2.style.fontWeight = 'bolder';
                        h2.style.height = '70px';

                        input.parentElement?.replaceChild(h2, input);
                    });

                    Array.from(clonedDocument.querySelectorAll('.h3')).forEach((input) => {
                        const inputEl = input as HTMLInputElement
                        const h3 = clonedDocument.createElement('div');

                        h3.innerText = inputEl.value;
                        h3.style.fontFamily = 'PorscheNextTT', 'sans-serif';
                        h3.style.cursor = 'text';
                        h3.style.fontSize = '1.5rem';
                        h3.style.display = 'flex'
                        h3.style.flexDirection = 'row';

                        input.parentElement?.replaceChild(h3, input);
                    });
                },
            }).then((canvas) => {
                return canvas
            });
        return canvas
    }
}

export { changeComponents }
