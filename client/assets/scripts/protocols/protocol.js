/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    protocol.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof protocol
         * @interface IHeader
         * @property {string|null} [cmd] Header cmd
         * @property {number|null} [sn] Header sn
         */

        /**
         * Constructs a new Header.
         * @memberof protocol
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {protocol.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header cmd.
         * @member {string} cmd
         * @memberof protocol.Header
         * @instance
         */
        Header.prototype.cmd = "";

        /**
         * Header sn.
         * @member {number} sn
         * @memberof protocol.Header
         * @instance
         */
        Header.prototype.sn = 0;

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof protocol.Header
         * @static
         * @param {protocol.IHeader=} [properties] Properties to set
         * @returns {protocol.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link protocol.Header.verify|verify} messages.
         * @function encode
         * @memberof protocol.Header
         * @static
         * @param {protocol.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmd);
            if (message.sn != null && Object.hasOwnProperty.call(message, "sn"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sn);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link protocol.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Header
         * @static
         * @param {protocol.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Header();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.string();
                        break;
                    }
                case 2: {
                        message.sn = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof protocol.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isString(message.cmd))
                    return "cmd: string expected";
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (!$util.isInteger(message.sn))
                    return "sn: integer expected";
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Header)
                return object;
            var message = new $root.protocol.Header();
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.sn != null)
                message.sn = object.sn >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Header
         * @static
         * @param {protocol.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = "";
                object.sn = 0;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.sn != null && message.hasOwnProperty("sn"))
                object.sn = message.sn;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof protocol.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof protocol.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Header";
        };

        return Header;
    })();

    protocol.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof protocol
         * @interface ILoginReq
         * @property {string|null} [account] LoginReq account
         */

        /**
         * Constructs a new LoginReq.
         * @memberof protocol
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {protocol.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq account.
         * @member {string} account
         * @memberof protocol.LoginReq
         * @instance
         */
        LoginReq.prototype.account = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq=} [properties] Properties to set
         * @returns {protocol.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof protocol.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginReq)
                return object;
            var message = new $root.protocol.LoginReq();
            if (object.account != null)
                message.account = String(object.account);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.account = "";
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof protocol.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof protocol.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LoginReq";
        };

        return LoginReq;
    })();

    protocol.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof protocol
         * @interface ILoginRes
         * @property {number|null} [code] LoginRes code
         * @property {number|null} [uid] LoginRes uid
         */

        /**
         * Constructs a new LoginRes.
         * @memberof protocol
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {protocol.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes code.
         * @member {number} code
         * @memberof protocol.LoginRes
         * @instance
         */
        LoginRes.prototype.code = 0;

        /**
         * LoginRes uid.
         * @member {number} uid
         * @memberof protocol.LoginRes
         * @instance
         */
        LoginRes.prototype.uid = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof protocol.LoginRes
         * @static
         * @param {protocol.ILoginRes=} [properties] Properties to set
         * @returns {protocol.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link protocol.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginRes
         * @static
         * @param {protocol.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link protocol.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginRes
         * @static
         * @param {protocol.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.uid = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof protocol.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginRes)
                return object;
            var message = new $root.protocol.LoginRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginRes
         * @static
         * @param {protocol.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.uid = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof protocol.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof protocol.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LoginRes";
        };

        return LoginRes;
    })();

    protocol.HeartReq = (function() {

        /**
         * Properties of a HeartReq.
         * @memberof protocol
         * @interface IHeartReq
         */

        /**
         * Constructs a new HeartReq.
         * @memberof protocol
         * @classdesc Represents a HeartReq.
         * @implements IHeartReq
         * @constructor
         * @param {protocol.IHeartReq=} [properties] Properties to set
         */
        function HeartReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @function create
         * @memberof protocol.HeartReq
         * @static
         * @param {protocol.IHeartReq=} [properties] Properties to set
         * @returns {protocol.HeartReq} HeartReq instance
         */
        HeartReq.create = function create(properties) {
            return new HeartReq(properties);
        };

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link protocol.HeartReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeartReq
         * @static
         * @param {protocol.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link protocol.HeartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeartReq
         * @static
         * @param {protocol.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeartReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartReq message.
         * @function verify
         * @memberof protocol.HeartReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeartReq} HeartReq
         */
        HeartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeartReq)
                return object;
            return new $root.protocol.HeartReq();
        };

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeartReq
         * @static
         * @param {protocol.HeartReq} message HeartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartReq to JSON.
         * @function toJSON
         * @memberof protocol.HeartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartReq
         * @function getTypeUrl
         * @memberof protocol.HeartReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HeartReq";
        };

        return HeartReq;
    })();

    protocol.HeartRes = (function() {

        /**
         * Properties of a HeartRes.
         * @memberof protocol
         * @interface IHeartRes
         * @property {number|null} [code] HeartRes code
         * @property {number|Long|null} [time] HeartRes time
         */

        /**
         * Constructs a new HeartRes.
         * @memberof protocol
         * @classdesc Represents a HeartRes.
         * @implements IHeartRes
         * @constructor
         * @param {protocol.IHeartRes=} [properties] Properties to set
         */
        function HeartRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartRes code.
         * @member {number} code
         * @memberof protocol.HeartRes
         * @instance
         */
        HeartRes.prototype.code = 0;

        /**
         * HeartRes time.
         * @member {number|Long} time
         * @memberof protocol.HeartRes
         * @instance
         */
        HeartRes.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartRes instance using the specified properties.
         * @function create
         * @memberof protocol.HeartRes
         * @static
         * @param {protocol.IHeartRes=} [properties] Properties to set
         * @returns {protocol.HeartRes} HeartRes instance
         */
        HeartRes.create = function create(properties) {
            return new HeartRes(properties);
        };

        /**
         * Encodes the specified HeartRes message. Does not implicitly {@link protocol.HeartRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeartRes
         * @static
         * @param {protocol.IHeartRes} message HeartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified HeartRes message, length delimited. Does not implicitly {@link protocol.HeartRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeartRes
         * @static
         * @param {protocol.IHeartRes} message HeartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeartRes} HeartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeartRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeartRes} HeartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartRes message.
         * @function verify
         * @memberof protocol.HeartRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeartRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeartRes} HeartRes
         */
        HeartRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeartRes)
                return object;
            var message = new $root.protocol.HeartRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeartRes
         * @static
         * @param {protocol.HeartRes} message HeartRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this HeartRes to JSON.
         * @function toJSON
         * @memberof protocol.HeartRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartRes
         * @function getTypeUrl
         * @memberof protocol.HeartRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HeartRes";
        };

        return HeartRes;
    })();

    protocol.NotifyKickout = (function() {

        /**
         * Properties of a NotifyKickout.
         * @memberof protocol
         * @interface INotifyKickout
         * @property {number|null} [reason] NotifyKickout reason
         * @property {string|null} [msg] NotifyKickout msg
         */

        /**
         * Constructs a new NotifyKickout.
         * @memberof protocol
         * @classdesc 玩家踢下线
         * @implements INotifyKickout
         * @constructor
         * @param {protocol.INotifyKickout=} [properties] Properties to set
         */
        function NotifyKickout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyKickout reason.
         * @member {number} reason
         * @memberof protocol.NotifyKickout
         * @instance
         */
        NotifyKickout.prototype.reason = 0;

        /**
         * NotifyKickout msg.
         * @member {string} msg
         * @memberof protocol.NotifyKickout
         * @instance
         */
        NotifyKickout.prototype.msg = "";

        /**
         * Creates a new NotifyKickout instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyKickout
         * @static
         * @param {protocol.INotifyKickout=} [properties] Properties to set
         * @returns {protocol.NotifyKickout} NotifyKickout instance
         */
        NotifyKickout.create = function create(properties) {
            return new NotifyKickout(properties);
        };

        /**
         * Encodes the specified NotifyKickout message. Does not implicitly {@link protocol.NotifyKickout.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyKickout
         * @static
         * @param {protocol.INotifyKickout} message NotifyKickout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyKickout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified NotifyKickout message, length delimited. Does not implicitly {@link protocol.NotifyKickout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyKickout
         * @static
         * @param {protocol.INotifyKickout} message NotifyKickout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyKickout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyKickout message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyKickout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyKickout} NotifyKickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyKickout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyKickout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyKickout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyKickout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyKickout} NotifyKickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyKickout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyKickout message.
         * @function verify
         * @memberof protocol.NotifyKickout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyKickout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a NotifyKickout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyKickout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyKickout} NotifyKickout
         */
        NotifyKickout.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyKickout)
                return object;
            var message = new $root.protocol.NotifyKickout();
            if (object.reason != null)
                message.reason = object.reason | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a NotifyKickout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyKickout
         * @static
         * @param {protocol.NotifyKickout} message NotifyKickout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyKickout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.msg = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this NotifyKickout to JSON.
         * @function toJSON
         * @memberof protocol.NotifyKickout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyKickout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyKickout
         * @function getTypeUrl
         * @memberof protocol.NotifyKickout
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyKickout.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyKickout";
        };

        return NotifyKickout;
    })();

    return protocol;
})();

module.exports = $root;
