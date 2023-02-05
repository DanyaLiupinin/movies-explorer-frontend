const numberOfVisibleFilms = (width) => {
    if (width >= 1051) {
        return 16;
    } else if (width >= 769) {
        return 12;
    } else if (width >= 451) {
        return 8;
    } else {
        return 5;
    }
}

const showMoreStep = (width) => {

    if (width >= 1051) {
        return 4;
    } else if (width >= 769) {
        return 3;
    } else if (width >= 451) {
        return 2;
    } else {
        return 1;
    }
}

export { numberOfVisibleFilms, showMoreStep}