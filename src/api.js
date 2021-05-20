export const onClick = (dispatch, name) => {
    dispatch('sort/dir');
    dispatch('sort/changed', name)
}

export const onChange = (dispatch, inputName, value) => {
    const text = {};
    text[inputName] = value.toLowerCase();
    dispatch('filter/changed', text)
}