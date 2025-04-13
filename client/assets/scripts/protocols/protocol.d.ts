import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protocol. */
export namespace protocol {

    /** Properties of a Header. */
    interface IHeader {

        /** Header cmd */
        cmd?: (string|null);

        /** Header sn */
        sn?: (number|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeader);

        /** Header cmd. */
        public cmd: string;

        /** Header sn. */
        public sn: number;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: protocol.IHeader): protocol.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link protocol.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link protocol.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): protocol.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Header
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq account */
        account?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginReq);

        /** LoginReq account. */
        public account: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: protocol.ILoginReq): protocol.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes code */
        code?: (number|null);

        /** LoginRes uid */
        uid?: (number|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginRes);

        /** LoginRes code. */
        public code: number;

        /** LoginRes uid. */
        public uid: number;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: protocol.ILoginRes): protocol.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link protocol.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link protocol.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginRes;

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @param message LoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartReq. */
    interface IHeartReq {
    }

    /** Represents a HeartReq. */
    class HeartReq implements IHeartReq {

        /**
         * Constructs a new HeartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeartReq);

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartReq instance
         */
        public static create(properties?: protocol.IHeartReq): protocol.HeartReq;

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link protocol.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link protocol.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeartReq;

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeartReq;

        /**
         * Verifies a HeartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeartReq;

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @param message HeartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeartReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartRes. */
    interface IHeartRes {

        /** HeartRes code */
        code?: (number|null);

        /** HeartRes time */
        time?: (number|Long|null);
    }

    /** Represents a HeartRes. */
    class HeartRes implements IHeartRes {

        /**
         * Constructs a new HeartRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeartRes);

        /** HeartRes code. */
        public code: number;

        /** HeartRes time. */
        public time: (number|Long);

        /**
         * Creates a new HeartRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartRes instance
         */
        public static create(properties?: protocol.IHeartRes): protocol.HeartRes;

        /**
         * Encodes the specified HeartRes message. Does not implicitly {@link protocol.HeartRes.verify|verify} messages.
         * @param message HeartRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeartRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartRes message, length delimited. Does not implicitly {@link protocol.HeartRes.verify|verify} messages.
         * @param message HeartRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeartRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeartRes;

        /**
         * Decodes a HeartRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeartRes;

        /**
         * Verifies a HeartRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeartRes;

        /**
         * Creates a plain object from a HeartRes message. Also converts values to other types if specified.
         * @param message HeartRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeartRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyKickout. */
    interface INotifyKickout {

        /** NotifyKickout reason */
        reason?: (number|null);

        /** NotifyKickout msg */
        msg?: (string|null);
    }

    /** 玩家踢下线 */
    class NotifyKickout implements INotifyKickout {

        /**
         * Constructs a new NotifyKickout.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyKickout);

        /** NotifyKickout reason. */
        public reason: number;

        /** NotifyKickout msg. */
        public msg: string;

        /**
         * Creates a new NotifyKickout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyKickout instance
         */
        public static create(properties?: protocol.INotifyKickout): protocol.NotifyKickout;

        /**
         * Encodes the specified NotifyKickout message. Does not implicitly {@link protocol.NotifyKickout.verify|verify} messages.
         * @param message NotifyKickout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyKickout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyKickout message, length delimited. Does not implicitly {@link protocol.NotifyKickout.verify|verify} messages.
         * @param message NotifyKickout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyKickout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyKickout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyKickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyKickout;

        /**
         * Decodes a NotifyKickout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyKickout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyKickout;

        /**
         * Verifies a NotifyKickout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyKickout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyKickout
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyKickout;

        /**
         * Creates a plain object from a NotifyKickout message. Also converts values to other types if specified.
         * @param message NotifyKickout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyKickout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyKickout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyKickout
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
