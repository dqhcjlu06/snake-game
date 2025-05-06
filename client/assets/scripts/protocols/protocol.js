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
         * @property {number|null} [pid] LoginRes pid
         * @property {number|Long|null} [time] LoginRes time
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
         * LoginRes pid.
         * @member {number} pid
         * @memberof protocol.LoginRes
         * @instance
         */
        LoginRes.prototype.pid = 0;

        /**
         * LoginRes time.
         * @member {number|Long} time
         * @memberof protocol.LoginRes
         * @instance
         */
        LoginRes.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pid);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
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
                        message.pid = reader.uint32();
                        break;
                    }
                case 3: {
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
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
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
            if (object.pid != null)
                message.pid = object.pid >>> 0;
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
                object.pid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
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

    protocol.NotifyGamePlayerEnter = (function() {

        /**
         * Properties of a NotifyGamePlayerEnter.
         * @memberof protocol
         * @interface INotifyGamePlayerEnter
         * @property {number|null} [pid] NotifyGamePlayerEnter pid
         * @property {boolean|null} [isPlayer] NotifyGamePlayerEnter isPlayer
         * @property {boolean|null} [ready] NotifyGamePlayerEnter ready
         */

        /**
         * Constructs a new NotifyGamePlayerEnter.
         * @memberof protocol
         * @classdesc Represents a NotifyGamePlayerEnter.
         * @implements INotifyGamePlayerEnter
         * @constructor
         * @param {protocol.INotifyGamePlayerEnter=} [properties] Properties to set
         */
        function NotifyGamePlayerEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGamePlayerEnter pid.
         * @member {number} pid
         * @memberof protocol.NotifyGamePlayerEnter
         * @instance
         */
        NotifyGamePlayerEnter.prototype.pid = 0;

        /**
         * NotifyGamePlayerEnter isPlayer.
         * @member {boolean} isPlayer
         * @memberof protocol.NotifyGamePlayerEnter
         * @instance
         */
        NotifyGamePlayerEnter.prototype.isPlayer = false;

        /**
         * NotifyGamePlayerEnter ready.
         * @member {boolean} ready
         * @memberof protocol.NotifyGamePlayerEnter
         * @instance
         */
        NotifyGamePlayerEnter.prototype.ready = false;

        /**
         * Creates a new NotifyGamePlayerEnter instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {protocol.INotifyGamePlayerEnter=} [properties] Properties to set
         * @returns {protocol.NotifyGamePlayerEnter} NotifyGamePlayerEnter instance
         */
        NotifyGamePlayerEnter.create = function create(properties) {
            return new NotifyGamePlayerEnter(properties);
        };

        /**
         * Encodes the specified NotifyGamePlayerEnter message. Does not implicitly {@link protocol.NotifyGamePlayerEnter.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {protocol.INotifyGamePlayerEnter} message NotifyGamePlayerEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGamePlayerEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pid);
            if (message.isPlayer != null && Object.hasOwnProperty.call(message, "isPlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isPlayer);
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ready);
            return writer;
        };

        /**
         * Encodes the specified NotifyGamePlayerEnter message, length delimited. Does not implicitly {@link protocol.NotifyGamePlayerEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {protocol.INotifyGamePlayerEnter} message NotifyGamePlayerEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGamePlayerEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGamePlayerEnter message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyGamePlayerEnter} NotifyGamePlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGamePlayerEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyGamePlayerEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.isPlayer = reader.bool();
                        break;
                    }
                case 3: {
                        message.ready = reader.bool();
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
         * Decodes a NotifyGamePlayerEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyGamePlayerEnter} NotifyGamePlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGamePlayerEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGamePlayerEnter message.
         * @function verify
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGamePlayerEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            if (message.isPlayer != null && message.hasOwnProperty("isPlayer"))
                if (typeof message.isPlayer !== "boolean")
                    return "isPlayer: boolean expected";
            if (message.ready != null && message.hasOwnProperty("ready"))
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
            return null;
        };

        /**
         * Creates a NotifyGamePlayerEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyGamePlayerEnter} NotifyGamePlayerEnter
         */
        NotifyGamePlayerEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyGamePlayerEnter)
                return object;
            var message = new $root.protocol.NotifyGamePlayerEnter();
            if (object.pid != null)
                message.pid = object.pid >>> 0;
            if (object.isPlayer != null)
                message.isPlayer = Boolean(object.isPlayer);
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            return message;
        };

        /**
         * Creates a plain object from a NotifyGamePlayerEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {protocol.NotifyGamePlayerEnter} message NotifyGamePlayerEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGamePlayerEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = 0;
                object.isPlayer = false;
                object.ready = false;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.isPlayer != null && message.hasOwnProperty("isPlayer"))
                object.isPlayer = message.isPlayer;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            return object;
        };

        /**
         * Converts this NotifyGamePlayerEnter to JSON.
         * @function toJSON
         * @memberof protocol.NotifyGamePlayerEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGamePlayerEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGamePlayerEnter
         * @function getTypeUrl
         * @memberof protocol.NotifyGamePlayerEnter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGamePlayerEnter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyGamePlayerEnter";
        };

        return NotifyGamePlayerEnter;
    })();

    protocol.EnterGameReq = (function() {

        /**
         * Properties of an EnterGameReq.
         * @memberof protocol
         * @interface IEnterGameReq
         * @property {string|null} [roomno] EnterGameReq roomno
         * @property {boolean|null} [isPlayer] EnterGameReq isPlayer
         * @property {number|null} [seat] EnterGameReq seat
         */

        /**
         * Constructs a new EnterGameReq.
         * @memberof protocol
         * @classdesc 进入游戏
         * @implements IEnterGameReq
         * @constructor
         * @param {protocol.IEnterGameReq=} [properties] Properties to set
         */
        function EnterGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGameReq roomno.
         * @member {string} roomno
         * @memberof protocol.EnterGameReq
         * @instance
         */
        EnterGameReq.prototype.roomno = "";

        /**
         * EnterGameReq isPlayer.
         * @member {boolean} isPlayer
         * @memberof protocol.EnterGameReq
         * @instance
         */
        EnterGameReq.prototype.isPlayer = false;

        /**
         * EnterGameReq seat.
         * @member {number} seat
         * @memberof protocol.EnterGameReq
         * @instance
         */
        EnterGameReq.prototype.seat = 0;

        /**
         * Creates a new EnterGameReq instance using the specified properties.
         * @function create
         * @memberof protocol.EnterGameReq
         * @static
         * @param {protocol.IEnterGameReq=} [properties] Properties to set
         * @returns {protocol.EnterGameReq} EnterGameReq instance
         */
        EnterGameReq.create = function create(properties) {
            return new EnterGameReq(properties);
        };

        /**
         * Encodes the specified EnterGameReq message. Does not implicitly {@link protocol.EnterGameReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.EnterGameReq
         * @static
         * @param {protocol.IEnterGameReq} message EnterGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomno != null && Object.hasOwnProperty.call(message, "roomno"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomno);
            if (message.isPlayer != null && Object.hasOwnProperty.call(message, "isPlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isPlayer);
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seat);
            return writer;
        };

        /**
         * Encodes the specified EnterGameReq message, length delimited. Does not implicitly {@link protocol.EnterGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EnterGameReq
         * @static
         * @param {protocol.IEnterGameReq} message EnterGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EnterGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EnterGameReq} EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EnterGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomno = reader.string();
                        break;
                    }
                case 2: {
                        message.isPlayer = reader.bool();
                        break;
                    }
                case 3: {
                        message.seat = reader.int32();
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
         * Decodes an EnterGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EnterGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EnterGameReq} EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGameReq message.
         * @function verify
         * @memberof protocol.EnterGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomno != null && message.hasOwnProperty("roomno"))
                if (!$util.isString(message.roomno))
                    return "roomno: string expected";
            if (message.isPlayer != null && message.hasOwnProperty("isPlayer"))
                if (typeof message.isPlayer !== "boolean")
                    return "isPlayer: boolean expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            return null;
        };

        /**
         * Creates an EnterGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EnterGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EnterGameReq} EnterGameReq
         */
        EnterGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EnterGameReq)
                return object;
            var message = new $root.protocol.EnterGameReq();
            if (object.roomno != null)
                message.roomno = String(object.roomno);
            if (object.isPlayer != null)
                message.isPlayer = Boolean(object.isPlayer);
            if (object.seat != null)
                message.seat = object.seat | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EnterGameReq
         * @static
         * @param {protocol.EnterGameReq} message EnterGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomno = "";
                object.isPlayer = false;
                object.seat = 0;
            }
            if (message.roomno != null && message.hasOwnProperty("roomno"))
                object.roomno = message.roomno;
            if (message.isPlayer != null && message.hasOwnProperty("isPlayer"))
                object.isPlayer = message.isPlayer;
            if (message.seat != null && message.hasOwnProperty("seat"))
                object.seat = message.seat;
            return object;
        };

        /**
         * Converts this EnterGameReq to JSON.
         * @function toJSON
         * @memberof protocol.EnterGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterGameReq
         * @function getTypeUrl
         * @memberof protocol.EnterGameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.EnterGameReq";
        };

        return EnterGameReq;
    })();

    protocol.EnterGameRes = (function() {

        /**
         * Properties of an EnterGameRes.
         * @memberof protocol
         * @interface IEnterGameRes
         * @property {number|null} [code] EnterGameRes code
         * @property {Array.<protocol.INotifyGamePlayerEnter>|null} [players] EnterGameRes players
         * @property {number|null} [currFrameIndex] EnterGameRes currFrameIndex
         */

        /**
         * Constructs a new EnterGameRes.
         * @memberof protocol
         * @classdesc Represents an EnterGameRes.
         * @implements IEnterGameRes
         * @constructor
         * @param {protocol.IEnterGameRes=} [properties] Properties to set
         */
        function EnterGameRes(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGameRes code.
         * @member {number} code
         * @memberof protocol.EnterGameRes
         * @instance
         */
        EnterGameRes.prototype.code = 0;

        /**
         * EnterGameRes players.
         * @member {Array.<protocol.INotifyGamePlayerEnter>} players
         * @memberof protocol.EnterGameRes
         * @instance
         */
        EnterGameRes.prototype.players = $util.emptyArray;

        /**
         * EnterGameRes currFrameIndex.
         * @member {number} currFrameIndex
         * @memberof protocol.EnterGameRes
         * @instance
         */
        EnterGameRes.prototype.currFrameIndex = 0;

        /**
         * Creates a new EnterGameRes instance using the specified properties.
         * @function create
         * @memberof protocol.EnterGameRes
         * @static
         * @param {protocol.IEnterGameRes=} [properties] Properties to set
         * @returns {protocol.EnterGameRes} EnterGameRes instance
         */
        EnterGameRes.create = function create(properties) {
            return new EnterGameRes(properties);
        };

        /**
         * Encodes the specified EnterGameRes message. Does not implicitly {@link protocol.EnterGameRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.EnterGameRes
         * @static
         * @param {protocol.IEnterGameRes} message EnterGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.protocol.NotifyGamePlayerEnter.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.currFrameIndex != null && Object.hasOwnProperty.call(message, "currFrameIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.currFrameIndex);
            return writer;
        };

        /**
         * Encodes the specified EnterGameRes message, length delimited. Does not implicitly {@link protocol.EnterGameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EnterGameRes
         * @static
         * @param {protocol.IEnterGameRes} message EnterGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EnterGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EnterGameRes} EnterGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EnterGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.protocol.NotifyGamePlayerEnter.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.currFrameIndex = reader.uint32();
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
         * Decodes an EnterGameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EnterGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EnterGameRes} EnterGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGameRes message.
         * @function verify
         * @memberof protocol.EnterGameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.protocol.NotifyGamePlayerEnter.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.currFrameIndex != null && message.hasOwnProperty("currFrameIndex"))
                if (!$util.isInteger(message.currFrameIndex))
                    return "currFrameIndex: integer expected";
            return null;
        };

        /**
         * Creates an EnterGameRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EnterGameRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EnterGameRes} EnterGameRes
         */
        EnterGameRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EnterGameRes)
                return object;
            var message = new $root.protocol.EnterGameRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".protocol.EnterGameRes.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".protocol.EnterGameRes.players: object expected");
                    message.players[i] = $root.protocol.NotifyGamePlayerEnter.fromObject(object.players[i]);
                }
            }
            if (object.currFrameIndex != null)
                message.currFrameIndex = object.currFrameIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterGameRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EnterGameRes
         * @static
         * @param {protocol.EnterGameRes} message EnterGameRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterGameRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.code = 0;
                object.currFrameIndex = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.protocol.NotifyGamePlayerEnter.toObject(message.players[j], options);
            }
            if (message.currFrameIndex != null && message.hasOwnProperty("currFrameIndex"))
                object.currFrameIndex = message.currFrameIndex;
            return object;
        };

        /**
         * Converts this EnterGameRes to JSON.
         * @function toJSON
         * @memberof protocol.EnterGameRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterGameRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterGameRes
         * @function getTypeUrl
         * @memberof protocol.EnterGameRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.EnterGameRes";
        };

        return EnterGameRes;
    })();

    protocol.SendReadyReq = (function() {

        /**
         * Properties of a SendReadyReq.
         * @memberof protocol
         * @interface ISendReadyReq
         */

        /**
         * Constructs a new SendReadyReq.
         * @memberof protocol
         * @classdesc Represents a SendReadyReq.
         * @implements ISendReadyReq
         * @constructor
         * @param {protocol.ISendReadyReq=} [properties] Properties to set
         */
        function SendReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SendReadyReq instance using the specified properties.
         * @function create
         * @memberof protocol.SendReadyReq
         * @static
         * @param {protocol.ISendReadyReq=} [properties] Properties to set
         * @returns {protocol.SendReadyReq} SendReadyReq instance
         */
        SendReadyReq.create = function create(properties) {
            return new SendReadyReq(properties);
        };

        /**
         * Encodes the specified SendReadyReq message. Does not implicitly {@link protocol.SendReadyReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SendReadyReq
         * @static
         * @param {protocol.ISendReadyReq} message SendReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SendReadyReq message, length delimited. Does not implicitly {@link protocol.SendReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SendReadyReq
         * @static
         * @param {protocol.ISendReadyReq} message SendReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SendReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SendReadyReq} SendReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SendReadyReq();
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
         * Decodes a SendReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SendReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SendReadyReq} SendReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendReadyReq message.
         * @function verify
         * @memberof protocol.SendReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SendReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SendReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SendReadyReq} SendReadyReq
         */
        SendReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SendReadyReq)
                return object;
            return new $root.protocol.SendReadyReq();
        };

        /**
         * Creates a plain object from a SendReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SendReadyReq
         * @static
         * @param {protocol.SendReadyReq} message SendReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendReadyReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SendReadyReq to JSON.
         * @function toJSON
         * @memberof protocol.SendReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendReadyReq
         * @function getTypeUrl
         * @memberof protocol.SendReadyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendReadyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SendReadyReq";
        };

        return SendReadyReq;
    })();

    protocol.SendReadyRes = (function() {

        /**
         * Properties of a SendReadyRes.
         * @memberof protocol
         * @interface ISendReadyRes
         * @property {number|null} [code] SendReadyRes code
         */

        /**
         * Constructs a new SendReadyRes.
         * @memberof protocol
         * @classdesc Represents a SendReadyRes.
         * @implements ISendReadyRes
         * @constructor
         * @param {protocol.ISendReadyRes=} [properties] Properties to set
         */
        function SendReadyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendReadyRes code.
         * @member {number} code
         * @memberof protocol.SendReadyRes
         * @instance
         */
        SendReadyRes.prototype.code = 0;

        /**
         * Creates a new SendReadyRes instance using the specified properties.
         * @function create
         * @memberof protocol.SendReadyRes
         * @static
         * @param {protocol.ISendReadyRes=} [properties] Properties to set
         * @returns {protocol.SendReadyRes} SendReadyRes instance
         */
        SendReadyRes.create = function create(properties) {
            return new SendReadyRes(properties);
        };

        /**
         * Encodes the specified SendReadyRes message. Does not implicitly {@link protocol.SendReadyRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.SendReadyRes
         * @static
         * @param {protocol.ISendReadyRes} message SendReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReadyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified SendReadyRes message, length delimited. Does not implicitly {@link protocol.SendReadyRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SendReadyRes
         * @static
         * @param {protocol.ISendReadyRes} message SendReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReadyRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReadyRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SendReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SendReadyRes} SendReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReadyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SendReadyRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.code = reader.int32();
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
         * Decodes a SendReadyRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SendReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SendReadyRes} SendReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReadyRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendReadyRes message.
         * @function verify
         * @memberof protocol.SendReadyRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendReadyRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a SendReadyRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SendReadyRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SendReadyRes} SendReadyRes
         */
        SendReadyRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SendReadyRes)
                return object;
            var message = new $root.protocol.SendReadyRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReadyRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SendReadyRes
         * @static
         * @param {protocol.SendReadyRes} message SendReadyRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendReadyRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this SendReadyRes to JSON.
         * @function toJSON
         * @memberof protocol.SendReadyRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReadyRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendReadyRes
         * @function getTypeUrl
         * @memberof protocol.SendReadyRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendReadyRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SendReadyRes";
        };

        return SendReadyRes;
    })();

    protocol.PlayerReadyStatus = (function() {

        /**
         * Properties of a PlayerReadyStatus.
         * @memberof protocol
         * @interface IPlayerReadyStatus
         * @property {number|null} [pid] PlayerReadyStatus pid
         * @property {boolean|null} [ready] PlayerReadyStatus ready
         */

        /**
         * Constructs a new PlayerReadyStatus.
         * @memberof protocol
         * @classdesc Represents a PlayerReadyStatus.
         * @implements IPlayerReadyStatus
         * @constructor
         * @param {protocol.IPlayerReadyStatus=} [properties] Properties to set
         */
        function PlayerReadyStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerReadyStatus pid.
         * @member {number} pid
         * @memberof protocol.PlayerReadyStatus
         * @instance
         */
        PlayerReadyStatus.prototype.pid = 0;

        /**
         * PlayerReadyStatus ready.
         * @member {boolean} ready
         * @memberof protocol.PlayerReadyStatus
         * @instance
         */
        PlayerReadyStatus.prototype.ready = false;

        /**
         * Creates a new PlayerReadyStatus instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {protocol.IPlayerReadyStatus=} [properties] Properties to set
         * @returns {protocol.PlayerReadyStatus} PlayerReadyStatus instance
         */
        PlayerReadyStatus.create = function create(properties) {
            return new PlayerReadyStatus(properties);
        };

        /**
         * Encodes the specified PlayerReadyStatus message. Does not implicitly {@link protocol.PlayerReadyStatus.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {protocol.IPlayerReadyStatus} message PlayerReadyStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerReadyStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pid);
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ready);
            return writer;
        };

        /**
         * Encodes the specified PlayerReadyStatus message, length delimited. Does not implicitly {@link protocol.PlayerReadyStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {protocol.IPlayerReadyStatus} message PlayerReadyStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerReadyStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerReadyStatus message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerReadyStatus} PlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerReadyStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerReadyStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.ready = reader.bool();
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
         * Decodes a PlayerReadyStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerReadyStatus} PlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerReadyStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerReadyStatus message.
         * @function verify
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerReadyStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            if (message.ready != null && message.hasOwnProperty("ready"))
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
            return null;
        };

        /**
         * Creates a PlayerReadyStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerReadyStatus} PlayerReadyStatus
         */
        PlayerReadyStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerReadyStatus)
                return object;
            var message = new $root.protocol.PlayerReadyStatus();
            if (object.pid != null)
                message.pid = object.pid >>> 0;
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            return message;
        };

        /**
         * Creates a plain object from a PlayerReadyStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {protocol.PlayerReadyStatus} message PlayerReadyStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerReadyStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = 0;
                object.ready = false;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            return object;
        };

        /**
         * Converts this PlayerReadyStatus to JSON.
         * @function toJSON
         * @memberof protocol.PlayerReadyStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerReadyStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerReadyStatus
         * @function getTypeUrl
         * @memberof protocol.PlayerReadyStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerReadyStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.PlayerReadyStatus";
        };

        return PlayerReadyStatus;
    })();

    protocol.NotifyPlayerReadyStatus = (function() {

        /**
         * Properties of a NotifyPlayerReadyStatus.
         * @memberof protocol
         * @interface INotifyPlayerReadyStatus
         * @property {Array.<protocol.IPlayerReadyStatus>|null} [players] NotifyPlayerReadyStatus players
         */

        /**
         * Constructs a new NotifyPlayerReadyStatus.
         * @memberof protocol
         * @classdesc Represents a NotifyPlayerReadyStatus.
         * @implements INotifyPlayerReadyStatus
         * @constructor
         * @param {protocol.INotifyPlayerReadyStatus=} [properties] Properties to set
         */
        function NotifyPlayerReadyStatus(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyPlayerReadyStatus players.
         * @member {Array.<protocol.IPlayerReadyStatus>} players
         * @memberof protocol.NotifyPlayerReadyStatus
         * @instance
         */
        NotifyPlayerReadyStatus.prototype.players = $util.emptyArray;

        /**
         * Creates a new NotifyPlayerReadyStatus instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {protocol.INotifyPlayerReadyStatus=} [properties] Properties to set
         * @returns {protocol.NotifyPlayerReadyStatus} NotifyPlayerReadyStatus instance
         */
        NotifyPlayerReadyStatus.create = function create(properties) {
            return new NotifyPlayerReadyStatus(properties);
        };

        /**
         * Encodes the specified NotifyPlayerReadyStatus message. Does not implicitly {@link protocol.NotifyPlayerReadyStatus.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {protocol.INotifyPlayerReadyStatus} message NotifyPlayerReadyStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPlayerReadyStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.protocol.PlayerReadyStatus.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotifyPlayerReadyStatus message, length delimited. Does not implicitly {@link protocol.NotifyPlayerReadyStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {protocol.INotifyPlayerReadyStatus} message NotifyPlayerReadyStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPlayerReadyStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyPlayerReadyStatus message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyPlayerReadyStatus} NotifyPlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPlayerReadyStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyPlayerReadyStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.protocol.PlayerReadyStatus.decode(reader, reader.uint32()));
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
         * Decodes a NotifyPlayerReadyStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyPlayerReadyStatus} NotifyPlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPlayerReadyStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyPlayerReadyStatus message.
         * @function verify
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyPlayerReadyStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.protocol.PlayerReadyStatus.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotifyPlayerReadyStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyPlayerReadyStatus} NotifyPlayerReadyStatus
         */
        NotifyPlayerReadyStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyPlayerReadyStatus)
                return object;
            var message = new $root.protocol.NotifyPlayerReadyStatus();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".protocol.NotifyPlayerReadyStatus.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".protocol.NotifyPlayerReadyStatus.players: object expected");
                    message.players[i] = $root.protocol.PlayerReadyStatus.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyPlayerReadyStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {protocol.NotifyPlayerReadyStatus} message NotifyPlayerReadyStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyPlayerReadyStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.protocol.PlayerReadyStatus.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this NotifyPlayerReadyStatus to JSON.
         * @function toJSON
         * @memberof protocol.NotifyPlayerReadyStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyPlayerReadyStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyPlayerReadyStatus
         * @function getTypeUrl
         * @memberof protocol.NotifyPlayerReadyStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyPlayerReadyStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyPlayerReadyStatus";
        };

        return NotifyPlayerReadyStatus;
    })();

    protocol.NotifyGameStart = (function() {

        /**
         * Properties of a NotifyGameStart.
         * @memberof protocol
         * @interface INotifyGameStart
         */

        /**
         * Constructs a new NotifyGameStart.
         * @memberof protocol
         * @classdesc Represents a NotifyGameStart.
         * @implements INotifyGameStart
         * @constructor
         * @param {protocol.INotifyGameStart=} [properties] Properties to set
         */
        function NotifyGameStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new NotifyGameStart instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {protocol.INotifyGameStart=} [properties] Properties to set
         * @returns {protocol.NotifyGameStart} NotifyGameStart instance
         */
        NotifyGameStart.create = function create(properties) {
            return new NotifyGameStart(properties);
        };

        /**
         * Encodes the specified NotifyGameStart message. Does not implicitly {@link protocol.NotifyGameStart.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {protocol.INotifyGameStart} message NotifyGameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified NotifyGameStart message, length delimited. Does not implicitly {@link protocol.NotifyGameStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {protocol.INotifyGameStart} message NotifyGameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameStart message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyGameStart} NotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyGameStart();
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
         * Decodes a NotifyGameStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyGameStart} NotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameStart message.
         * @function verify
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a NotifyGameStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyGameStart} NotifyGameStart
         */
        NotifyGameStart.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyGameStart)
                return object;
            return new $root.protocol.NotifyGameStart();
        };

        /**
         * Creates a plain object from a NotifyGameStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {protocol.NotifyGameStart} message NotifyGameStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameStart.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NotifyGameStart to JSON.
         * @function toJSON
         * @memberof protocol.NotifyGameStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGameStart
         * @function getTypeUrl
         * @memberof protocol.NotifyGameStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGameStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyGameStart";
        };

        return NotifyGameStart;
    })();

    protocol.SendDirectionReq = (function() {

        /**
         * Properties of a SendDirectionReq.
         * @memberof protocol
         * @interface ISendDirectionReq
         * @property {number|null} [direction] SendDirectionReq direction
         */

        /**
         * Constructs a new SendDirectionReq.
         * @memberof protocol
         * @classdesc Represents a SendDirectionReq.
         * @implements ISendDirectionReq
         * @constructor
         * @param {protocol.ISendDirectionReq=} [properties] Properties to set
         */
        function SendDirectionReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDirectionReq direction.
         * @member {number} direction
         * @memberof protocol.SendDirectionReq
         * @instance
         */
        SendDirectionReq.prototype.direction = 0;

        /**
         * Creates a new SendDirectionReq instance using the specified properties.
         * @function create
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {protocol.ISendDirectionReq=} [properties] Properties to set
         * @returns {protocol.SendDirectionReq} SendDirectionReq instance
         */
        SendDirectionReq.create = function create(properties) {
            return new SendDirectionReq(properties);
        };

        /**
         * Encodes the specified SendDirectionReq message. Does not implicitly {@link protocol.SendDirectionReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {protocol.ISendDirectionReq} message SendDirectionReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDirectionReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.direction);
            return writer;
        };

        /**
         * Encodes the specified SendDirectionReq message, length delimited. Does not implicitly {@link protocol.SendDirectionReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {protocol.ISendDirectionReq} message SendDirectionReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDirectionReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDirectionReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SendDirectionReq} SendDirectionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDirectionReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SendDirectionReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.direction = reader.int32();
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
         * Decodes a SendDirectionReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SendDirectionReq} SendDirectionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDirectionReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDirectionReq message.
         * @function verify
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDirectionReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isInteger(message.direction))
                    return "direction: integer expected";
            return null;
        };

        /**
         * Creates a SendDirectionReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SendDirectionReq} SendDirectionReq
         */
        SendDirectionReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SendDirectionReq)
                return object;
            var message = new $root.protocol.SendDirectionReq();
            if (object.direction != null)
                message.direction = object.direction | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDirectionReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {protocol.SendDirectionReq} message SendDirectionReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDirectionReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.direction = 0;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            return object;
        };

        /**
         * Converts this SendDirectionReq to JSON.
         * @function toJSON
         * @memberof protocol.SendDirectionReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDirectionReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendDirectionReq
         * @function getTypeUrl
         * @memberof protocol.SendDirectionReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendDirectionReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SendDirectionReq";
        };

        return SendDirectionReq;
    })();

    protocol.SendDirectionRes = (function() {

        /**
         * Properties of a SendDirectionRes.
         * @memberof protocol
         * @interface ISendDirectionRes
         * @property {number|null} [code] SendDirectionRes code
         */

        /**
         * Constructs a new SendDirectionRes.
         * @memberof protocol
         * @classdesc Represents a SendDirectionRes.
         * @implements ISendDirectionRes
         * @constructor
         * @param {protocol.ISendDirectionRes=} [properties] Properties to set
         */
        function SendDirectionRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDirectionRes code.
         * @member {number} code
         * @memberof protocol.SendDirectionRes
         * @instance
         */
        SendDirectionRes.prototype.code = 0;

        /**
         * Creates a new SendDirectionRes instance using the specified properties.
         * @function create
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {protocol.ISendDirectionRes=} [properties] Properties to set
         * @returns {protocol.SendDirectionRes} SendDirectionRes instance
         */
        SendDirectionRes.create = function create(properties) {
            return new SendDirectionRes(properties);
        };

        /**
         * Encodes the specified SendDirectionRes message. Does not implicitly {@link protocol.SendDirectionRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {protocol.ISendDirectionRes} message SendDirectionRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDirectionRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified SendDirectionRes message, length delimited. Does not implicitly {@link protocol.SendDirectionRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {protocol.ISendDirectionRes} message SendDirectionRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDirectionRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDirectionRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SendDirectionRes} SendDirectionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDirectionRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SendDirectionRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
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
         * Decodes a SendDirectionRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SendDirectionRes} SendDirectionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDirectionRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDirectionRes message.
         * @function verify
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDirectionRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a SendDirectionRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SendDirectionRes} SendDirectionRes
         */
        SendDirectionRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SendDirectionRes)
                return object;
            var message = new $root.protocol.SendDirectionRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDirectionRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {protocol.SendDirectionRes} message SendDirectionRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDirectionRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this SendDirectionRes to JSON.
         * @function toJSON
         * @memberof protocol.SendDirectionRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDirectionRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendDirectionRes
         * @function getTypeUrl
         * @memberof protocol.SendDirectionRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendDirectionRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SendDirectionRes";
        };

        return SendDirectionRes;
    })();

    protocol.Vec2 = (function() {

        /**
         * Properties of a Vec2.
         * @memberof protocol
         * @interface IVec2
         * @property {number|null} [x] Vec2 x
         * @property {number|null} [y] Vec2 y
         */

        /**
         * Constructs a new Vec2.
         * @memberof protocol
         * @classdesc Represents a Vec2.
         * @implements IVec2
         * @constructor
         * @param {protocol.IVec2=} [properties] Properties to set
         */
        function Vec2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vec2 x.
         * @member {number} x
         * @memberof protocol.Vec2
         * @instance
         */
        Vec2.prototype.x = 0;

        /**
         * Vec2 y.
         * @member {number} y
         * @memberof protocol.Vec2
         * @instance
         */
        Vec2.prototype.y = 0;

        /**
         * Creates a new Vec2 instance using the specified properties.
         * @function create
         * @memberof protocol.Vec2
         * @static
         * @param {protocol.IVec2=} [properties] Properties to set
         * @returns {protocol.Vec2} Vec2 instance
         */
        Vec2.create = function create(properties) {
            return new Vec2(properties);
        };

        /**
         * Encodes the specified Vec2 message. Does not implicitly {@link protocol.Vec2.verify|verify} messages.
         * @function encode
         * @memberof protocol.Vec2
         * @static
         * @param {protocol.IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link protocol.Vec2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Vec2
         * @static
         * @param {protocol.IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vec2 message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Vec2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
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
         * Decodes a Vec2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vec2 message.
         * @function verify
         * @memberof protocol.Vec2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Vec2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Vec2} Vec2
         */
        Vec2.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Vec2)
                return object;
            var message = new $root.protocol.Vec2();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Vec2
         * @static
         * @param {protocol.Vec2} message Vec2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Vec2 to JSON.
         * @function toJSON
         * @memberof protocol.Vec2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Vec2
         * @function getTypeUrl
         * @memberof protocol.Vec2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vec2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Vec2";
        };

        return Vec2;
    })();

    protocol.PlayerFrame = (function() {

        /**
         * Properties of a PlayerFrame.
         * @memberof protocol
         * @interface IPlayerFrame
         * @property {number|null} [pid] PlayerFrame pid
         * @property {number|null} [direction] PlayerFrame direction
         * @property {protocol.IVec2|null} [newfood] PlayerFrame newfood
         */

        /**
         * Constructs a new PlayerFrame.
         * @memberof protocol
         * @classdesc Represents a PlayerFrame.
         * @implements IPlayerFrame
         * @constructor
         * @param {protocol.IPlayerFrame=} [properties] Properties to set
         */
        function PlayerFrame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerFrame pid.
         * @member {number} pid
         * @memberof protocol.PlayerFrame
         * @instance
         */
        PlayerFrame.prototype.pid = 0;

        /**
         * PlayerFrame direction.
         * @member {number} direction
         * @memberof protocol.PlayerFrame
         * @instance
         */
        PlayerFrame.prototype.direction = 0;

        /**
         * PlayerFrame newfood.
         * @member {protocol.IVec2|null|undefined} newfood
         * @memberof protocol.PlayerFrame
         * @instance
         */
        PlayerFrame.prototype.newfood = null;

        /**
         * Creates a new PlayerFrame instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerFrame
         * @static
         * @param {protocol.IPlayerFrame=} [properties] Properties to set
         * @returns {protocol.PlayerFrame} PlayerFrame instance
         */
        PlayerFrame.create = function create(properties) {
            return new PlayerFrame(properties);
        };

        /**
         * Encodes the specified PlayerFrame message. Does not implicitly {@link protocol.PlayerFrame.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerFrame
         * @static
         * @param {protocol.IPlayerFrame} message PlayerFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pid);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
            if (message.newfood != null && Object.hasOwnProperty.call(message, "newfood"))
                $root.protocol.Vec2.encode(message.newfood, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerFrame message, length delimited. Does not implicitly {@link protocol.PlayerFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerFrame
         * @static
         * @param {protocol.IPlayerFrame} message PlayerFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerFrame message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerFrame} PlayerFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.direction = reader.int32();
                        break;
                    }
                case 3: {
                        message.newfood = $root.protocol.Vec2.decode(reader, reader.uint32());
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
         * Decodes a PlayerFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerFrame} PlayerFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerFrame message.
         * @function verify
         * @memberof protocol.PlayerFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isInteger(message.direction))
                    return "direction: integer expected";
            if (message.newfood != null && message.hasOwnProperty("newfood")) {
                var error = $root.protocol.Vec2.verify(message.newfood);
                if (error)
                    return "newfood." + error;
            }
            return null;
        };

        /**
         * Creates a PlayerFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerFrame} PlayerFrame
         */
        PlayerFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerFrame)
                return object;
            var message = new $root.protocol.PlayerFrame();
            if (object.pid != null)
                message.pid = object.pid >>> 0;
            if (object.direction != null)
                message.direction = object.direction | 0;
            if (object.newfood != null) {
                if (typeof object.newfood !== "object")
                    throw TypeError(".protocol.PlayerFrame.newfood: object expected");
                message.newfood = $root.protocol.Vec2.fromObject(object.newfood);
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerFrame
         * @static
         * @param {protocol.PlayerFrame} message PlayerFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pid = 0;
                object.direction = 0;
                object.newfood = null;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            if (message.newfood != null && message.hasOwnProperty("newfood"))
                object.newfood = $root.protocol.Vec2.toObject(message.newfood, options);
            return object;
        };

        /**
         * Converts this PlayerFrame to JSON.
         * @function toJSON
         * @memberof protocol.PlayerFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerFrame
         * @function getTypeUrl
         * @memberof protocol.PlayerFrame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.PlayerFrame";
        };

        return PlayerFrame;
    })();

    protocol.BroadcastFrame = (function() {

        /**
         * Properties of a BroadcastFrame.
         * @memberof protocol
         * @interface IBroadcastFrame
         * @property {number|null} [index] BroadcastFrame index
         * @property {Array.<protocol.IPlayerFrame>|null} [players] BroadcastFrame players
         */

        /**
         * Constructs a new BroadcastFrame.
         * @memberof protocol
         * @classdesc Represents a BroadcastFrame.
         * @implements IBroadcastFrame
         * @constructor
         * @param {protocol.IBroadcastFrame=} [properties] Properties to set
         */
        function BroadcastFrame(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastFrame index.
         * @member {number} index
         * @memberof protocol.BroadcastFrame
         * @instance
         */
        BroadcastFrame.prototype.index = 0;

        /**
         * BroadcastFrame players.
         * @member {Array.<protocol.IPlayerFrame>} players
         * @memberof protocol.BroadcastFrame
         * @instance
         */
        BroadcastFrame.prototype.players = $util.emptyArray;

        /**
         * Creates a new BroadcastFrame instance using the specified properties.
         * @function create
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {protocol.IBroadcastFrame=} [properties] Properties to set
         * @returns {protocol.BroadcastFrame} BroadcastFrame instance
         */
        BroadcastFrame.create = function create(properties) {
            return new BroadcastFrame(properties);
        };

        /**
         * Encodes the specified BroadcastFrame message. Does not implicitly {@link protocol.BroadcastFrame.verify|verify} messages.
         * @function encode
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {protocol.IBroadcastFrame} message BroadcastFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.protocol.PlayerFrame.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastFrame message, length delimited. Does not implicitly {@link protocol.BroadcastFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {protocol.IBroadcastFrame} message BroadcastFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastFrame message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BroadcastFrame} BroadcastFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BroadcastFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.protocol.PlayerFrame.decode(reader, reader.uint32()));
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
         * Decodes a BroadcastFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BroadcastFrame} BroadcastFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastFrame message.
         * @function verify
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.protocol.PlayerFrame.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BroadcastFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BroadcastFrame} BroadcastFrame
         */
        BroadcastFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BroadcastFrame)
                return object;
            var message = new $root.protocol.BroadcastFrame();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".protocol.BroadcastFrame.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".protocol.BroadcastFrame.players: object expected");
                    message.players[i] = $root.protocol.PlayerFrame.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {protocol.BroadcastFrame} message BroadcastFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.protocol.PlayerFrame.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this BroadcastFrame to JSON.
         * @function toJSON
         * @memberof protocol.BroadcastFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BroadcastFrame
         * @function getTypeUrl
         * @memberof protocol.BroadcastFrame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BroadcastFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.BroadcastFrame";
        };

        return BroadcastFrame;
    })();

    protocol.GetIndexFrameReq = (function() {

        /**
         * Properties of a GetIndexFrameReq.
         * @memberof protocol
         * @interface IGetIndexFrameReq
         * @property {number|null} [index] GetIndexFrameReq index
         */

        /**
         * Constructs a new GetIndexFrameReq.
         * @memberof protocol
         * @classdesc Represents a GetIndexFrameReq.
         * @implements IGetIndexFrameReq
         * @constructor
         * @param {protocol.IGetIndexFrameReq=} [properties] Properties to set
         */
        function GetIndexFrameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetIndexFrameReq index.
         * @member {number} index
         * @memberof protocol.GetIndexFrameReq
         * @instance
         */
        GetIndexFrameReq.prototype.index = 0;

        /**
         * Creates a new GetIndexFrameReq instance using the specified properties.
         * @function create
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {protocol.IGetIndexFrameReq=} [properties] Properties to set
         * @returns {protocol.GetIndexFrameReq} GetIndexFrameReq instance
         */
        GetIndexFrameReq.create = function create(properties) {
            return new GetIndexFrameReq(properties);
        };

        /**
         * Encodes the specified GetIndexFrameReq message. Does not implicitly {@link protocol.GetIndexFrameReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {protocol.IGetIndexFrameReq} message GetIndexFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIndexFrameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            return writer;
        };

        /**
         * Encodes the specified GetIndexFrameReq message, length delimited. Does not implicitly {@link protocol.GetIndexFrameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {protocol.IGetIndexFrameReq} message GetIndexFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIndexFrameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetIndexFrameReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GetIndexFrameReq} GetIndexFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIndexFrameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GetIndexFrameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.uint32();
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
         * Decodes a GetIndexFrameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GetIndexFrameReq} GetIndexFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIndexFrameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetIndexFrameReq message.
         * @function verify
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetIndexFrameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };

        /**
         * Creates a GetIndexFrameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GetIndexFrameReq} GetIndexFrameReq
         */
        GetIndexFrameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GetIndexFrameReq)
                return object;
            var message = new $root.protocol.GetIndexFrameReq();
            if (object.index != null)
                message.index = object.index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GetIndexFrameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {protocol.GetIndexFrameReq} message GetIndexFrameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetIndexFrameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this GetIndexFrameReq to JSON.
         * @function toJSON
         * @memberof protocol.GetIndexFrameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetIndexFrameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetIndexFrameReq
         * @function getTypeUrl
         * @memberof protocol.GetIndexFrameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetIndexFrameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GetIndexFrameReq";
        };

        return GetIndexFrameReq;
    })();

    protocol.GetIndexFrameRes = (function() {

        /**
         * Properties of a GetIndexFrameRes.
         * @memberof protocol
         * @interface IGetIndexFrameRes
         * @property {number|null} [code] GetIndexFrameRes code
         * @property {protocol.IBroadcastFrame|null} [frame] GetIndexFrameRes frame
         */

        /**
         * Constructs a new GetIndexFrameRes.
         * @memberof protocol
         * @classdesc Represents a GetIndexFrameRes.
         * @implements IGetIndexFrameRes
         * @constructor
         * @param {protocol.IGetIndexFrameRes=} [properties] Properties to set
         */
        function GetIndexFrameRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetIndexFrameRes code.
         * @member {number} code
         * @memberof protocol.GetIndexFrameRes
         * @instance
         */
        GetIndexFrameRes.prototype.code = 0;

        /**
         * GetIndexFrameRes frame.
         * @member {protocol.IBroadcastFrame|null|undefined} frame
         * @memberof protocol.GetIndexFrameRes
         * @instance
         */
        GetIndexFrameRes.prototype.frame = null;

        /**
         * Creates a new GetIndexFrameRes instance using the specified properties.
         * @function create
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {protocol.IGetIndexFrameRes=} [properties] Properties to set
         * @returns {protocol.GetIndexFrameRes} GetIndexFrameRes instance
         */
        GetIndexFrameRes.create = function create(properties) {
            return new GetIndexFrameRes(properties);
        };

        /**
         * Encodes the specified GetIndexFrameRes message. Does not implicitly {@link protocol.GetIndexFrameRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {protocol.IGetIndexFrameRes} message GetIndexFrameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIndexFrameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                $root.protocol.BroadcastFrame.encode(message.frame, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetIndexFrameRes message, length delimited. Does not implicitly {@link protocol.GetIndexFrameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {protocol.IGetIndexFrameRes} message GetIndexFrameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIndexFrameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetIndexFrameRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GetIndexFrameRes} GetIndexFrameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIndexFrameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GetIndexFrameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.frame = $root.protocol.BroadcastFrame.decode(reader, reader.uint32());
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
         * Decodes a GetIndexFrameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GetIndexFrameRes} GetIndexFrameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIndexFrameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetIndexFrameRes message.
         * @function verify
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetIndexFrameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.frame != null && message.hasOwnProperty("frame")) {
                var error = $root.protocol.BroadcastFrame.verify(message.frame);
                if (error)
                    return "frame." + error;
            }
            return null;
        };

        /**
         * Creates a GetIndexFrameRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GetIndexFrameRes} GetIndexFrameRes
         */
        GetIndexFrameRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GetIndexFrameRes)
                return object;
            var message = new $root.protocol.GetIndexFrameRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.frame != null) {
                if (typeof object.frame !== "object")
                    throw TypeError(".protocol.GetIndexFrameRes.frame: object expected");
                message.frame = $root.protocol.BroadcastFrame.fromObject(object.frame);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetIndexFrameRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {protocol.GetIndexFrameRes} message GetIndexFrameRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetIndexFrameRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.frame = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = $root.protocol.BroadcastFrame.toObject(message.frame, options);
            return object;
        };

        /**
         * Converts this GetIndexFrameRes to JSON.
         * @function toJSON
         * @memberof protocol.GetIndexFrameRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetIndexFrameRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetIndexFrameRes
         * @function getTypeUrl
         * @memberof protocol.GetIndexFrameRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetIndexFrameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GetIndexFrameRes";
        };

        return GetIndexFrameRes;
    })();

    protocol.EatFoodReq = (function() {

        /**
         * Properties of an EatFoodReq.
         * @memberof protocol
         * @interface IEatFoodReq
         * @property {protocol.IVec2|null} [food] EatFoodReq food
         */

        /**
         * Constructs a new EatFoodReq.
         * @memberof protocol
         * @classdesc Represents an EatFoodReq.
         * @implements IEatFoodReq
         * @constructor
         * @param {protocol.IEatFoodReq=} [properties] Properties to set
         */
        function EatFoodReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EatFoodReq food.
         * @member {protocol.IVec2|null|undefined} food
         * @memberof protocol.EatFoodReq
         * @instance
         */
        EatFoodReq.prototype.food = null;

        /**
         * Creates a new EatFoodReq instance using the specified properties.
         * @function create
         * @memberof protocol.EatFoodReq
         * @static
         * @param {protocol.IEatFoodReq=} [properties] Properties to set
         * @returns {protocol.EatFoodReq} EatFoodReq instance
         */
        EatFoodReq.create = function create(properties) {
            return new EatFoodReq(properties);
        };

        /**
         * Encodes the specified EatFoodReq message. Does not implicitly {@link protocol.EatFoodReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.EatFoodReq
         * @static
         * @param {protocol.IEatFoodReq} message EatFoodReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EatFoodReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.food != null && Object.hasOwnProperty.call(message, "food"))
                $root.protocol.Vec2.encode(message.food, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EatFoodReq message, length delimited. Does not implicitly {@link protocol.EatFoodReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EatFoodReq
         * @static
         * @param {protocol.IEatFoodReq} message EatFoodReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EatFoodReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EatFoodReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EatFoodReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EatFoodReq} EatFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EatFoodReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EatFoodReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.food = $root.protocol.Vec2.decode(reader, reader.uint32());
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
         * Decodes an EatFoodReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EatFoodReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EatFoodReq} EatFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EatFoodReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EatFoodReq message.
         * @function verify
         * @memberof protocol.EatFoodReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EatFoodReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.food != null && message.hasOwnProperty("food")) {
                var error = $root.protocol.Vec2.verify(message.food);
                if (error)
                    return "food." + error;
            }
            return null;
        };

        /**
         * Creates an EatFoodReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EatFoodReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EatFoodReq} EatFoodReq
         */
        EatFoodReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EatFoodReq)
                return object;
            var message = new $root.protocol.EatFoodReq();
            if (object.food != null) {
                if (typeof object.food !== "object")
                    throw TypeError(".protocol.EatFoodReq.food: object expected");
                message.food = $root.protocol.Vec2.fromObject(object.food);
            }
            return message;
        };

        /**
         * Creates a plain object from an EatFoodReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EatFoodReq
         * @static
         * @param {protocol.EatFoodReq} message EatFoodReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EatFoodReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.food = null;
            if (message.food != null && message.hasOwnProperty("food"))
                object.food = $root.protocol.Vec2.toObject(message.food, options);
            return object;
        };

        /**
         * Converts this EatFoodReq to JSON.
         * @function toJSON
         * @memberof protocol.EatFoodReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EatFoodReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EatFoodReq
         * @function getTypeUrl
         * @memberof protocol.EatFoodReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EatFoodReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.EatFoodReq";
        };

        return EatFoodReq;
    })();

    protocol.EatFoodRes = (function() {

        /**
         * Properties of an EatFoodRes.
         * @memberof protocol
         * @interface IEatFoodRes
         * @property {number|null} [code] EatFoodRes code
         */

        /**
         * Constructs a new EatFoodRes.
         * @memberof protocol
         * @classdesc Represents an EatFoodRes.
         * @implements IEatFoodRes
         * @constructor
         * @param {protocol.IEatFoodRes=} [properties] Properties to set
         */
        function EatFoodRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EatFoodRes code.
         * @member {number} code
         * @memberof protocol.EatFoodRes
         * @instance
         */
        EatFoodRes.prototype.code = 0;

        /**
         * Creates a new EatFoodRes instance using the specified properties.
         * @function create
         * @memberof protocol.EatFoodRes
         * @static
         * @param {protocol.IEatFoodRes=} [properties] Properties to set
         * @returns {protocol.EatFoodRes} EatFoodRes instance
         */
        EatFoodRes.create = function create(properties) {
            return new EatFoodRes(properties);
        };

        /**
         * Encodes the specified EatFoodRes message. Does not implicitly {@link protocol.EatFoodRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.EatFoodRes
         * @static
         * @param {protocol.IEatFoodRes} message EatFoodRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EatFoodRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified EatFoodRes message, length delimited. Does not implicitly {@link protocol.EatFoodRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EatFoodRes
         * @static
         * @param {protocol.IEatFoodRes} message EatFoodRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EatFoodRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EatFoodRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EatFoodRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EatFoodRes} EatFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EatFoodRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EatFoodRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
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
         * Decodes an EatFoodRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EatFoodRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EatFoodRes} EatFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EatFoodRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EatFoodRes message.
         * @function verify
         * @memberof protocol.EatFoodRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EatFoodRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates an EatFoodRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EatFoodRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EatFoodRes} EatFoodRes
         */
        EatFoodRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EatFoodRes)
                return object;
            var message = new $root.protocol.EatFoodRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from an EatFoodRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EatFoodRes
         * @static
         * @param {protocol.EatFoodRes} message EatFoodRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EatFoodRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this EatFoodRes to JSON.
         * @function toJSON
         * @memberof protocol.EatFoodRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EatFoodRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EatFoodRes
         * @function getTypeUrl
         * @memberof protocol.EatFoodRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EatFoodRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.EatFoodRes";
        };

        return EatFoodRes;
    })();

    protocol.GamePlayerEndReq = (function() {

        /**
         * Properties of a GamePlayerEndReq.
         * @memberof protocol
         * @interface IGamePlayerEndReq
         */

        /**
         * Constructs a new GamePlayerEndReq.
         * @memberof protocol
         * @classdesc Represents a GamePlayerEndReq.
         * @implements IGamePlayerEndReq
         * @constructor
         * @param {protocol.IGamePlayerEndReq=} [properties] Properties to set
         */
        function GamePlayerEndReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GamePlayerEndReq instance using the specified properties.
         * @function create
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {protocol.IGamePlayerEndReq=} [properties] Properties to set
         * @returns {protocol.GamePlayerEndReq} GamePlayerEndReq instance
         */
        GamePlayerEndReq.create = function create(properties) {
            return new GamePlayerEndReq(properties);
        };

        /**
         * Encodes the specified GamePlayerEndReq message. Does not implicitly {@link protocol.GamePlayerEndReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {protocol.IGamePlayerEndReq} message GamePlayerEndReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerEndReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GamePlayerEndReq message, length delimited. Does not implicitly {@link protocol.GamePlayerEndReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {protocol.IGamePlayerEndReq} message GamePlayerEndReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerEndReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePlayerEndReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GamePlayerEndReq} GamePlayerEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerEndReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GamePlayerEndReq();
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
         * Decodes a GamePlayerEndReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GamePlayerEndReq} GamePlayerEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerEndReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePlayerEndReq message.
         * @function verify
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePlayerEndReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GamePlayerEndReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GamePlayerEndReq} GamePlayerEndReq
         */
        GamePlayerEndReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GamePlayerEndReq)
                return object;
            return new $root.protocol.GamePlayerEndReq();
        };

        /**
         * Creates a plain object from a GamePlayerEndReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {protocol.GamePlayerEndReq} message GamePlayerEndReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePlayerEndReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GamePlayerEndReq to JSON.
         * @function toJSON
         * @memberof protocol.GamePlayerEndReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePlayerEndReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GamePlayerEndReq
         * @function getTypeUrl
         * @memberof protocol.GamePlayerEndReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GamePlayerEndReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GamePlayerEndReq";
        };

        return GamePlayerEndReq;
    })();

    protocol.GamePlayerEndRes = (function() {

        /**
         * Properties of a GamePlayerEndRes.
         * @memberof protocol
         * @interface IGamePlayerEndRes
         * @property {number|null} [code] GamePlayerEndRes code
         */

        /**
         * Constructs a new GamePlayerEndRes.
         * @memberof protocol
         * @classdesc Represents a GamePlayerEndRes.
         * @implements IGamePlayerEndRes
         * @constructor
         * @param {protocol.IGamePlayerEndRes=} [properties] Properties to set
         */
        function GamePlayerEndRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePlayerEndRes code.
         * @member {number} code
         * @memberof protocol.GamePlayerEndRes
         * @instance
         */
        GamePlayerEndRes.prototype.code = 0;

        /**
         * Creates a new GamePlayerEndRes instance using the specified properties.
         * @function create
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {protocol.IGamePlayerEndRes=} [properties] Properties to set
         * @returns {protocol.GamePlayerEndRes} GamePlayerEndRes instance
         */
        GamePlayerEndRes.create = function create(properties) {
            return new GamePlayerEndRes(properties);
        };

        /**
         * Encodes the specified GamePlayerEndRes message. Does not implicitly {@link protocol.GamePlayerEndRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {protocol.IGamePlayerEndRes} message GamePlayerEndRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerEndRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified GamePlayerEndRes message, length delimited. Does not implicitly {@link protocol.GamePlayerEndRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {protocol.IGamePlayerEndRes} message GamePlayerEndRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerEndRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePlayerEndRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GamePlayerEndRes} GamePlayerEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerEndRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GamePlayerEndRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
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
         * Decodes a GamePlayerEndRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GamePlayerEndRes} GamePlayerEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerEndRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePlayerEndRes message.
         * @function verify
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePlayerEndRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a GamePlayerEndRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GamePlayerEndRes} GamePlayerEndRes
         */
        GamePlayerEndRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GamePlayerEndRes)
                return object;
            var message = new $root.protocol.GamePlayerEndRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a GamePlayerEndRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {protocol.GamePlayerEndRes} message GamePlayerEndRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePlayerEndRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this GamePlayerEndRes to JSON.
         * @function toJSON
         * @memberof protocol.GamePlayerEndRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePlayerEndRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GamePlayerEndRes
         * @function getTypeUrl
         * @memberof protocol.GamePlayerEndRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GamePlayerEndRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GamePlayerEndRes";
        };

        return GamePlayerEndRes;
    })();

    protocol.NotifyGamePlayerEnd = (function() {

        /**
         * Properties of a NotifyGamePlayerEnd.
         * @memberof protocol
         * @interface INotifyGamePlayerEnd
         * @property {number|null} [pid] NotifyGamePlayerEnd pid
         */

        /**
         * Constructs a new NotifyGamePlayerEnd.
         * @memberof protocol
         * @classdesc Represents a NotifyGamePlayerEnd.
         * @implements INotifyGamePlayerEnd
         * @constructor
         * @param {protocol.INotifyGamePlayerEnd=} [properties] Properties to set
         */
        function NotifyGamePlayerEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGamePlayerEnd pid.
         * @member {number} pid
         * @memberof protocol.NotifyGamePlayerEnd
         * @instance
         */
        NotifyGamePlayerEnd.prototype.pid = 0;

        /**
         * Creates a new NotifyGamePlayerEnd instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {protocol.INotifyGamePlayerEnd=} [properties] Properties to set
         * @returns {protocol.NotifyGamePlayerEnd} NotifyGamePlayerEnd instance
         */
        NotifyGamePlayerEnd.create = function create(properties) {
            return new NotifyGamePlayerEnd(properties);
        };

        /**
         * Encodes the specified NotifyGamePlayerEnd message. Does not implicitly {@link protocol.NotifyGamePlayerEnd.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {protocol.INotifyGamePlayerEnd} message NotifyGamePlayerEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGamePlayerEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pid);
            return writer;
        };

        /**
         * Encodes the specified NotifyGamePlayerEnd message, length delimited. Does not implicitly {@link protocol.NotifyGamePlayerEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {protocol.INotifyGamePlayerEnd} message NotifyGamePlayerEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGamePlayerEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGamePlayerEnd message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyGamePlayerEnd} NotifyGamePlayerEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGamePlayerEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyGamePlayerEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pid = reader.uint32();
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
         * Decodes a NotifyGamePlayerEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyGamePlayerEnd} NotifyGamePlayerEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGamePlayerEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGamePlayerEnd message.
         * @function verify
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGamePlayerEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            return null;
        };

        /**
         * Creates a NotifyGamePlayerEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyGamePlayerEnd} NotifyGamePlayerEnd
         */
        NotifyGamePlayerEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyGamePlayerEnd)
                return object;
            var message = new $root.protocol.NotifyGamePlayerEnd();
            if (object.pid != null)
                message.pid = object.pid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a NotifyGamePlayerEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {protocol.NotifyGamePlayerEnd} message NotifyGamePlayerEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGamePlayerEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pid = 0;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            return object;
        };

        /**
         * Converts this NotifyGamePlayerEnd to JSON.
         * @function toJSON
         * @memberof protocol.NotifyGamePlayerEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGamePlayerEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGamePlayerEnd
         * @function getTypeUrl
         * @memberof protocol.NotifyGamePlayerEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGamePlayerEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyGamePlayerEnd";
        };

        return NotifyGamePlayerEnd;
    })();

    protocol.NotifyGameOver = (function() {

        /**
         * Properties of a NotifyGameOver.
         * @memberof protocol
         * @interface INotifyGameOver
         */

        /**
         * Constructs a new NotifyGameOver.
         * @memberof protocol
         * @classdesc Represents a NotifyGameOver.
         * @implements INotifyGameOver
         * @constructor
         * @param {protocol.INotifyGameOver=} [properties] Properties to set
         */
        function NotifyGameOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new NotifyGameOver instance using the specified properties.
         * @function create
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {protocol.INotifyGameOver=} [properties] Properties to set
         * @returns {protocol.NotifyGameOver} NotifyGameOver instance
         */
        NotifyGameOver.create = function create(properties) {
            return new NotifyGameOver(properties);
        };

        /**
         * Encodes the specified NotifyGameOver message. Does not implicitly {@link protocol.NotifyGameOver.verify|verify} messages.
         * @function encode
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {protocol.INotifyGameOver} message NotifyGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified NotifyGameOver message, length delimited. Does not implicitly {@link protocol.NotifyGameOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {protocol.INotifyGameOver} message NotifyGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameOver message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NotifyGameOver} NotifyGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NotifyGameOver();
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
         * Decodes a NotifyGameOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NotifyGameOver} NotifyGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameOver message.
         * @function verify
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a NotifyGameOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NotifyGameOver} NotifyGameOver
         */
        NotifyGameOver.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NotifyGameOver)
                return object;
            return new $root.protocol.NotifyGameOver();
        };

        /**
         * Creates a plain object from a NotifyGameOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {protocol.NotifyGameOver} message NotifyGameOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameOver.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NotifyGameOver to JSON.
         * @function toJSON
         * @memberof protocol.NotifyGameOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGameOver
         * @function getTypeUrl
         * @memberof protocol.NotifyGameOver
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGameOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NotifyGameOver";
        };

        return NotifyGameOver;
    })();

    protocol.SysncFramesReq = (function() {

        /**
         * Properties of a SysncFramesReq.
         * @memberof protocol
         * @interface ISysncFramesReq
         * @property {number|null} [start] SysncFramesReq start
         * @property {number|null} [end] SysncFramesReq end
         */

        /**
         * Constructs a new SysncFramesReq.
         * @memberof protocol
         * @classdesc Represents a SysncFramesReq.
         * @implements ISysncFramesReq
         * @constructor
         * @param {protocol.ISysncFramesReq=} [properties] Properties to set
         */
        function SysncFramesReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SysncFramesReq start.
         * @member {number} start
         * @memberof protocol.SysncFramesReq
         * @instance
         */
        SysncFramesReq.prototype.start = 0;

        /**
         * SysncFramesReq end.
         * @member {number} end
         * @memberof protocol.SysncFramesReq
         * @instance
         */
        SysncFramesReq.prototype.end = 0;

        /**
         * Creates a new SysncFramesReq instance using the specified properties.
         * @function create
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {protocol.ISysncFramesReq=} [properties] Properties to set
         * @returns {protocol.SysncFramesReq} SysncFramesReq instance
         */
        SysncFramesReq.create = function create(properties) {
            return new SysncFramesReq(properties);
        };

        /**
         * Encodes the specified SysncFramesReq message. Does not implicitly {@link protocol.SysncFramesReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {protocol.ISysncFramesReq} message SysncFramesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SysncFramesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.end);
            return writer;
        };

        /**
         * Encodes the specified SysncFramesReq message, length delimited. Does not implicitly {@link protocol.SysncFramesReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {protocol.ISysncFramesReq} message SysncFramesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SysncFramesReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SysncFramesReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SysncFramesReq} SysncFramesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SysncFramesReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SysncFramesReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.uint32();
                        break;
                    }
                case 2: {
                        message.end = reader.uint32();
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
         * Decodes a SysncFramesReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SysncFramesReq} SysncFramesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SysncFramesReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SysncFramesReq message.
         * @function verify
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SysncFramesReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start))
                    return "start: integer expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end))
                    return "end: integer expected";
            return null;
        };

        /**
         * Creates a SysncFramesReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SysncFramesReq} SysncFramesReq
         */
        SysncFramesReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SysncFramesReq)
                return object;
            var message = new $root.protocol.SysncFramesReq();
            if (object.start != null)
                message.start = object.start >>> 0;
            if (object.end != null)
                message.end = object.end >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SysncFramesReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {protocol.SysncFramesReq} message SysncFramesReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SysncFramesReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.start = 0;
                object.end = 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            return object;
        };

        /**
         * Converts this SysncFramesReq to JSON.
         * @function toJSON
         * @memberof protocol.SysncFramesReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SysncFramesReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SysncFramesReq
         * @function getTypeUrl
         * @memberof protocol.SysncFramesReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SysncFramesReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SysncFramesReq";
        };

        return SysncFramesReq;
    })();

    protocol.SysncFramesRes = (function() {

        /**
         * Properties of a SysncFramesRes.
         * @memberof protocol
         * @interface ISysncFramesRes
         * @property {number|null} [code] SysncFramesRes code
         * @property {Array.<protocol.IBroadcastFrame>|null} [frames] SysncFramesRes frames
         */

        /**
         * Constructs a new SysncFramesRes.
         * @memberof protocol
         * @classdesc Represents a SysncFramesRes.
         * @implements ISysncFramesRes
         * @constructor
         * @param {protocol.ISysncFramesRes=} [properties] Properties to set
         */
        function SysncFramesRes(properties) {
            this.frames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SysncFramesRes code.
         * @member {number} code
         * @memberof protocol.SysncFramesRes
         * @instance
         */
        SysncFramesRes.prototype.code = 0;

        /**
         * SysncFramesRes frames.
         * @member {Array.<protocol.IBroadcastFrame>} frames
         * @memberof protocol.SysncFramesRes
         * @instance
         */
        SysncFramesRes.prototype.frames = $util.emptyArray;

        /**
         * Creates a new SysncFramesRes instance using the specified properties.
         * @function create
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {protocol.ISysncFramesRes=} [properties] Properties to set
         * @returns {protocol.SysncFramesRes} SysncFramesRes instance
         */
        SysncFramesRes.create = function create(properties) {
            return new SysncFramesRes(properties);
        };

        /**
         * Encodes the specified SysncFramesRes message. Does not implicitly {@link protocol.SysncFramesRes.verify|verify} messages.
         * @function encode
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {protocol.ISysncFramesRes} message SysncFramesRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SysncFramesRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.frames != null && message.frames.length)
                for (var i = 0; i < message.frames.length; ++i)
                    $root.protocol.BroadcastFrame.encode(message.frames[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SysncFramesRes message, length delimited. Does not implicitly {@link protocol.SysncFramesRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {protocol.ISysncFramesRes} message SysncFramesRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SysncFramesRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SysncFramesRes message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SysncFramesRes} SysncFramesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SysncFramesRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SysncFramesRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.frames && message.frames.length))
                            message.frames = [];
                        message.frames.push($root.protocol.BroadcastFrame.decode(reader, reader.uint32()));
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
         * Decodes a SysncFramesRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SysncFramesRes} SysncFramesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SysncFramesRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SysncFramesRes message.
         * @function verify
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SysncFramesRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (var i = 0; i < message.frames.length; ++i) {
                    var error = $root.protocol.BroadcastFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SysncFramesRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SysncFramesRes} SysncFramesRes
         */
        SysncFramesRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SysncFramesRes)
                return object;
            var message = new $root.protocol.SysncFramesRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".protocol.SysncFramesRes.frames: array expected");
                message.frames = [];
                for (var i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".protocol.SysncFramesRes.frames: object expected");
                    message.frames[i] = $root.protocol.BroadcastFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SysncFramesRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {protocol.SysncFramesRes} message SysncFramesRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SysncFramesRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.frames = [];
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (var j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.protocol.BroadcastFrame.toObject(message.frames[j], options);
            }
            return object;
        };

        /**
         * Converts this SysncFramesRes to JSON.
         * @function toJSON
         * @memberof protocol.SysncFramesRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SysncFramesRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SysncFramesRes
         * @function getTypeUrl
         * @memberof protocol.SysncFramesRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SysncFramesRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SysncFramesRes";
        };

        return SysncFramesRes;
    })();

    return protocol;
})();

module.exports = $root;
