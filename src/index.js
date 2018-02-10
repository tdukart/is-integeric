/**
 * Given a value, tests if it's an integer or can be converted to one.
 * @param {*} value   The value under test.
 * @returns {boolean} True if it's an integer, false if it isn't.
 */
const isIntegeric = ( value ) => {
	if ( Number.isInteger( value ) ) {
		return true;
	}
	if ( ! Number.isNaN( parseInt( value, 10 ) ) ) {
		return true;
	}
	return false;
};

export default isIntegeric;
