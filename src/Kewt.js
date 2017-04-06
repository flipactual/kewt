require('core-js/fn/object/assign');
const KewtStore = require('./KewtStore');
const OPTIONS = require('./OPTIONS');
const DEFAULTS = require('./DEFAULTS');

class Kewt {
  /**
   * constructor - creates a new text track interface
   *
   * @param  {object} options  overrides for default options
   * @param  {object} defaults overrides for detault defaults
   */
  constructor(options, defaults) {
    KewtStore.options = Object.assign({}, OPTIONS, options);
    KewtStore.defaults = Object.assign({}, DEFAULTS, defaults);
    KewtStore.active = Object.assign({}, KewtStore.defaults);
  }
  /**
   * reset - resets all caption properties to their default values
   *
   * @return {Kewt}
   */
  reset() {
    Object.assign(KewtStore.active, KewtStore.defaults);
    return this;
  }
  /**
   * get - gets the property, if specified, or all the properties
   *
   * @param  {string}        [property] the property to get
   * @return {string|object}            the property, if specified, or all the properties
   */
  get(property) {
    return property ? KewtStore.active[property] : KewtStore.active;
  }
  /**
   * set - sets a property or properties
   *
   * @param  {string|object} property the property to set
   * @param  {string}        [value]  the value for the property if property is a string
   * @return {Kewt}
   */
  set(property, value) {
    if (typeof property === 'object') {
      Object.keys(property).forEach((key) => this.setProperty(key, property[key]));
      return KewtStore.active;
    }
    return this.setProperty(property, value);
  }
  /**
  * setProperty - sets a property
  *
  * @param  {string} property the property to set
  * @param  {string} value    the value for the property
  * @return {Kewt}
  */
  setProperty(property, value) {
    const valueString = value.toString();
    if (!KewtStore.isValid({ property, value })) {
      console.log(`Warning: ${valueString} is not an accepted value for ${property}`);
      return this;
    }
    KewtStore.active[property] = valueString;
    return this;
  }
}

module.exports = Kewt;
