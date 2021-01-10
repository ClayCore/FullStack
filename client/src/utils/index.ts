import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import RobotoBlack from '@flux/assets/fonts/Roboto-Black.ttf';
import RobotoBlackItalic from '@flux/assets/fonts/Roboto-BlackItalic.ttf';
import RobotoBold from '@flux/assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from '@flux/assets/fonts/Roboto-BoldItalic.ttf';
import RobotoItalic from '@flux/assets/fonts/Roboto-Italic.ttf';
import RobotoLight from '@flux/assets/fonts/Roboto-Light.ttf';
import RobotoLightItalic from '@flux/assets/fonts/Roboto-LightItalic.ttf';
import RobotoMedium from '@flux/assets/fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '@flux/assets/fonts/Roboto-MediumItalic.ttf';
import RobotoRegular from '@flux/assets/fonts/Roboto-Regular.ttf';
import RobotoSlabBlack from '@flux/assets/fonts/RobotoSlab-Black.ttf';
import RobotoSlabBold from '@flux/assets/fonts/RobotoSlab-Bold.ttf';
import RobotoSlabLight from '@flux/assets/fonts/RobotoSlab-Light.ttf';
import RobotoSlabMedium from '@flux/assets/fonts/RobotoSlab-Medium.ttf';
import RobotoSlabRegular from '@flux/assets/fonts/RobotoSlab-Regular.ttf';
import RobotoSlabThin from '@flux/assets/fonts/RobotoSlab-Thin.ttf';
import RobotoThin from '@flux/assets/fonts/Roboto-Thin.ttf';
import RobotoThinItalic from '@flux/assets/fonts/Roboto-ThinItalic.ttf';

const fonts = {
    RobotoLight,
    RobotoLightItalic,
    RobotoThin,
    RobotoThinItalic,
    RobotoRegular,
    RobotoItalic,
    RobotoMedium,
    RobotoMediumItalic,
    RobotoBold,
    RobotoBoldItalic,
    RobotoBlack,
    RobotoBlackItalic,
    RobotoSlabLight,
    RobotoSlabThin,
    RobotoSlabRegular,
    RobotoSlabMedium,
    RobotoSlabBold,
    RobotoSlabBlack,
};

export const initFontLibrary = (): any => {
    library.add(fas);
};

export default fonts;
