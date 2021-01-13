import { Textcomplete, Textarea } from 'textcomplete';
import { AUTO_COMPLETE_MAX_CANDIDATES } from '@flux/shared/constants';

export const registerAutoComplete = (
    textComplete: HTMLTextAreaElement,
    nameList: string[]
): void => {
    const editor: any = new Textarea(textComplete);
    const autoCompleteContent: any = new Textcomplete(editor);
    autoCompleteContent.register([
        {
            match: /(.*)@(.*?)$/,
            search: (
                term: string,
                callback: (results: string[]) => void
            ): void => {
                callback(
                    nameList
                        .filter((name) => {
                            return name.startsWith(term);
                        })
                        .slice(0, AUTO_COMPLETE_MAX_CANDIDATES)
                );
            },
            replace: (value: string) => {
                return '$1@' + value + ' ';
            },
        },
    ]);
};
