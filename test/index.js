/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback, no-var */
var chai = require( 'chai' );
var isIntegeric = require( '../dist' );

describe( 'isIntegeric', function () {
	it( 'is true for integers', function () {
		var value = isIntegeric( 2 );
		chai.assert.equal( value, true );
	} );

	it( 'is true for integers in strings', function () {
		var value = isIntegeric( '2' );
		chai.assert.equal( value, true );
	} );

	it( 'is true for floats', function () {
		var value = isIntegeric( 2.2 );
		chai.assert.equal( value, true );
	} );

	it( 'is true for floats in strings', function () {
		var value = isIntegeric( '2.2' );
		chai.assert.equal( value, true );
	} );

	it( 'is false for "?"', function () {
		var value = isIntegeric( '?' );
		chai.assert.equal( value, false );
	} );
} );
