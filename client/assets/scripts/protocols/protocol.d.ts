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

        /** LoginRes pid */
        pid?: (number|null);

        /** LoginRes time */
        time?: (number|Long|null);
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

        /** LoginRes pid. */
        public pid: number;

        /** LoginRes time. */
        public time: (number|Long);

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

    /** Properties of a NotifyGamePlayerEnter. */
    interface INotifyGamePlayerEnter {

        /** NotifyGamePlayerEnter pid */
        pid?: (number|null);

        /** NotifyGamePlayerEnter isPlayer */
        isPlayer?: (boolean|null);
    }

    /** Represents a NotifyGamePlayerEnter. */
    class NotifyGamePlayerEnter implements INotifyGamePlayerEnter {

        /**
         * Constructs a new NotifyGamePlayerEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyGamePlayerEnter);

        /** NotifyGamePlayerEnter pid. */
        public pid: number;

        /** NotifyGamePlayerEnter isPlayer. */
        public isPlayer: boolean;

        /**
         * Creates a new NotifyGamePlayerEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGamePlayerEnter instance
         */
        public static create(properties?: protocol.INotifyGamePlayerEnter): protocol.NotifyGamePlayerEnter;

        /**
         * Encodes the specified NotifyGamePlayerEnter message. Does not implicitly {@link protocol.NotifyGamePlayerEnter.verify|verify} messages.
         * @param message NotifyGamePlayerEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyGamePlayerEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGamePlayerEnter message, length delimited. Does not implicitly {@link protocol.NotifyGamePlayerEnter.verify|verify} messages.
         * @param message NotifyGamePlayerEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyGamePlayerEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGamePlayerEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGamePlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyGamePlayerEnter;

        /**
         * Decodes a NotifyGamePlayerEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGamePlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyGamePlayerEnter;

        /**
         * Verifies a NotifyGamePlayerEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGamePlayerEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGamePlayerEnter
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyGamePlayerEnter;

        /**
         * Creates a plain object from a NotifyGamePlayerEnter message. Also converts values to other types if specified.
         * @param message NotifyGamePlayerEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyGamePlayerEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGamePlayerEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGamePlayerEnter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterGameReq. */
    interface IEnterGameReq {

        /** EnterGameReq roomno */
        roomno?: (string|null);

        /** EnterGameReq isPlayer */
        isPlayer?: (boolean|null);

        /** EnterGameReq seat */
        seat?: (number|null);
    }

    /** 进入游戏 */
    class EnterGameReq implements IEnterGameReq {

        /**
         * Constructs a new EnterGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEnterGameReq);

        /** EnterGameReq roomno. */
        public roomno: string;

        /** EnterGameReq isPlayer. */
        public isPlayer: boolean;

        /** EnterGameReq seat. */
        public seat: number;

        /**
         * Creates a new EnterGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameReq instance
         */
        public static create(properties?: protocol.IEnterGameReq): protocol.EnterGameReq;

        /**
         * Encodes the specified EnterGameReq message. Does not implicitly {@link protocol.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameReq message, length delimited. Does not implicitly {@link protocol.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.EnterGameReq;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.EnterGameReq;

        /**
         * Verifies an EnterGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.EnterGameReq;

        /**
         * Creates a plain object from an EnterGameReq message. Also converts values to other types if specified.
         * @param message EnterGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EnterGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterGameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterGameRes. */
    interface IEnterGameRes {

        /** EnterGameRes code */
        code?: (number|null);

        /** EnterGameRes msg */
        msg?: (string|null);

        /** EnterGameRes players */
        players?: (protocol.INotifyGamePlayerEnter[]|null);

        /** EnterGameRes currFrameIndex */
        currFrameIndex?: (number|null);

        /** EnterGameRes running */
        running?: (boolean|null);

        /** EnterGameRes seat */
        seat?: (number|null);
    }

    /** Represents an EnterGameRes. */
    class EnterGameRes implements IEnterGameRes {

        /**
         * Constructs a new EnterGameRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEnterGameRes);

        /** EnterGameRes code. */
        public code: number;

        /** EnterGameRes msg. */
        public msg: string;

        /** EnterGameRes players. */
        public players: protocol.INotifyGamePlayerEnter[];

        /** EnterGameRes currFrameIndex. */
        public currFrameIndex: number;

        /** EnterGameRes running. */
        public running: boolean;

        /** EnterGameRes seat. */
        public seat: number;

        /**
         * Creates a new EnterGameRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameRes instance
         */
        public static create(properties?: protocol.IEnterGameRes): protocol.EnterGameRes;

        /**
         * Encodes the specified EnterGameRes message. Does not implicitly {@link protocol.EnterGameRes.verify|verify} messages.
         * @param message EnterGameRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEnterGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameRes message, length delimited. Does not implicitly {@link protocol.EnterGameRes.verify|verify} messages.
         * @param message EnterGameRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEnterGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.EnterGameRes;

        /**
         * Decodes an EnterGameRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.EnterGameRes;

        /**
         * Verifies an EnterGameRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.EnterGameRes;

        /**
         * Creates a plain object from an EnterGameRes message. Also converts values to other types if specified.
         * @param message EnterGameRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EnterGameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterGameRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendReadyReq. */
    interface ISendReadyReq {
    }

    /** Represents a SendReadyReq. */
    class SendReadyReq implements ISendReadyReq {

        /**
         * Constructs a new SendReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISendReadyReq);

        /**
         * Creates a new SendReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReadyReq instance
         */
        public static create(properties?: protocol.ISendReadyReq): protocol.SendReadyReq;

        /**
         * Encodes the specified SendReadyReq message. Does not implicitly {@link protocol.SendReadyReq.verify|verify} messages.
         * @param message SendReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISendReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReadyReq message, length delimited. Does not implicitly {@link protocol.SendReadyReq.verify|verify} messages.
         * @param message SendReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISendReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SendReadyReq;

        /**
         * Decodes a SendReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SendReadyReq;

        /**
         * Verifies a SendReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReadyReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.SendReadyReq;

        /**
         * Creates a plain object from a SendReadyReq message. Also converts values to other types if specified.
         * @param message SendReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SendReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendReadyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendReadyRes. */
    interface ISendReadyRes {

        /** SendReadyRes code */
        code?: (number|null);
    }

    /** Represents a SendReadyRes. */
    class SendReadyRes implements ISendReadyRes {

        /**
         * Constructs a new SendReadyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISendReadyRes);

        /** SendReadyRes code. */
        public code: number;

        /**
         * Creates a new SendReadyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReadyRes instance
         */
        public static create(properties?: protocol.ISendReadyRes): protocol.SendReadyRes;

        /**
         * Encodes the specified SendReadyRes message. Does not implicitly {@link protocol.SendReadyRes.verify|verify} messages.
         * @param message SendReadyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISendReadyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReadyRes message, length delimited. Does not implicitly {@link protocol.SendReadyRes.verify|verify} messages.
         * @param message SendReadyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISendReadyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReadyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SendReadyRes;

        /**
         * Decodes a SendReadyRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SendReadyRes;

        /**
         * Verifies a SendReadyRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReadyRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReadyRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.SendReadyRes;

        /**
         * Creates a plain object from a SendReadyRes message. Also converts values to other types if specified.
         * @param message SendReadyRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SendReadyRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReadyRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendReadyRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerReadyStatus. */
    interface IPlayerReadyStatus {

        /** PlayerReadyStatus pid */
        pid?: (number|null);

        /** PlayerReadyStatus ready */
        ready?: (boolean|null);
    }

    /** Represents a PlayerReadyStatus. */
    class PlayerReadyStatus implements IPlayerReadyStatus {

        /**
         * Constructs a new PlayerReadyStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerReadyStatus);

        /** PlayerReadyStatus pid. */
        public pid: number;

        /** PlayerReadyStatus ready. */
        public ready: boolean;

        /**
         * Creates a new PlayerReadyStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerReadyStatus instance
         */
        public static create(properties?: protocol.IPlayerReadyStatus): protocol.PlayerReadyStatus;

        /**
         * Encodes the specified PlayerReadyStatus message. Does not implicitly {@link protocol.PlayerReadyStatus.verify|verify} messages.
         * @param message PlayerReadyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerReadyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerReadyStatus message, length delimited. Does not implicitly {@link protocol.PlayerReadyStatus.verify|verify} messages.
         * @param message PlayerReadyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerReadyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerReadyStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.PlayerReadyStatus;

        /**
         * Decodes a PlayerReadyStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.PlayerReadyStatus;

        /**
         * Verifies a PlayerReadyStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerReadyStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerReadyStatus
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerReadyStatus;

        /**
         * Creates a plain object from a PlayerReadyStatus message. Also converts values to other types if specified.
         * @param message PlayerReadyStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerReadyStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerReadyStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerReadyStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyPlayerReadyStatus. */
    interface INotifyPlayerReadyStatus {

        /** NotifyPlayerReadyStatus players */
        players?: (protocol.IPlayerReadyStatus[]|null);
    }

    /** Represents a NotifyPlayerReadyStatus. */
    class NotifyPlayerReadyStatus implements INotifyPlayerReadyStatus {

        /**
         * Constructs a new NotifyPlayerReadyStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyPlayerReadyStatus);

        /** NotifyPlayerReadyStatus players. */
        public players: protocol.IPlayerReadyStatus[];

        /**
         * Creates a new NotifyPlayerReadyStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyPlayerReadyStatus instance
         */
        public static create(properties?: protocol.INotifyPlayerReadyStatus): protocol.NotifyPlayerReadyStatus;

        /**
         * Encodes the specified NotifyPlayerReadyStatus message. Does not implicitly {@link protocol.NotifyPlayerReadyStatus.verify|verify} messages.
         * @param message NotifyPlayerReadyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyPlayerReadyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyPlayerReadyStatus message, length delimited. Does not implicitly {@link protocol.NotifyPlayerReadyStatus.verify|verify} messages.
         * @param message NotifyPlayerReadyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyPlayerReadyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyPlayerReadyStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyPlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyPlayerReadyStatus;

        /**
         * Decodes a NotifyPlayerReadyStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyPlayerReadyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyPlayerReadyStatus;

        /**
         * Verifies a NotifyPlayerReadyStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyPlayerReadyStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyPlayerReadyStatus
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyPlayerReadyStatus;

        /**
         * Creates a plain object from a NotifyPlayerReadyStatus message. Also converts values to other types if specified.
         * @param message NotifyPlayerReadyStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyPlayerReadyStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyPlayerReadyStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyPlayerReadyStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGameStart. */
    interface INotifyGameStart {

        /** NotifyGameStart seat */
        seat?: (number|null);

        /** NotifyGameStart players */
        players?: (number[]|null);
    }

    /** Represents a NotifyGameStart. */
    class NotifyGameStart implements INotifyGameStart {

        /**
         * Constructs a new NotifyGameStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyGameStart);

        /** NotifyGameStart seat. */
        public seat: number;

        /** NotifyGameStart players. */
        public players: number[];

        /**
         * Creates a new NotifyGameStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameStart instance
         */
        public static create(properties?: protocol.INotifyGameStart): protocol.NotifyGameStart;

        /**
         * Encodes the specified NotifyGameStart message. Does not implicitly {@link protocol.NotifyGameStart.verify|verify} messages.
         * @param message NotifyGameStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyGameStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameStart message, length delimited. Does not implicitly {@link protocol.NotifyGameStart.verify|verify} messages.
         * @param message NotifyGameStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyGameStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyGameStart;

        /**
         * Decodes a NotifyGameStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyGameStart;

        /**
         * Verifies a NotifyGameStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameStart
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyGameStart;

        /**
         * Creates a plain object from a NotifyGameStart message. Also converts values to other types if specified.
         * @param message NotifyGameStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyGameStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGameStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendDirectionReq. */
    interface ISendDirectionReq {

        /** SendDirectionReq direction */
        direction?: (number|null);
    }

    /** Represents a SendDirectionReq. */
    class SendDirectionReq implements ISendDirectionReq {

        /**
         * Constructs a new SendDirectionReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISendDirectionReq);

        /** SendDirectionReq direction. */
        public direction: number;

        /**
         * Creates a new SendDirectionReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDirectionReq instance
         */
        public static create(properties?: protocol.ISendDirectionReq): protocol.SendDirectionReq;

        /**
         * Encodes the specified SendDirectionReq message. Does not implicitly {@link protocol.SendDirectionReq.verify|verify} messages.
         * @param message SendDirectionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISendDirectionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDirectionReq message, length delimited. Does not implicitly {@link protocol.SendDirectionReq.verify|verify} messages.
         * @param message SendDirectionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISendDirectionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDirectionReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDirectionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SendDirectionReq;

        /**
         * Decodes a SendDirectionReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDirectionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SendDirectionReq;

        /**
         * Verifies a SendDirectionReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDirectionReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDirectionReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.SendDirectionReq;

        /**
         * Creates a plain object from a SendDirectionReq message. Also converts values to other types if specified.
         * @param message SendDirectionReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SendDirectionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDirectionReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendDirectionReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendDirectionRes. */
    interface ISendDirectionRes {

        /** SendDirectionRes code */
        code?: (number|null);
    }

    /** Represents a SendDirectionRes. */
    class SendDirectionRes implements ISendDirectionRes {

        /**
         * Constructs a new SendDirectionRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISendDirectionRes);

        /** SendDirectionRes code. */
        public code: number;

        /**
         * Creates a new SendDirectionRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDirectionRes instance
         */
        public static create(properties?: protocol.ISendDirectionRes): protocol.SendDirectionRes;

        /**
         * Encodes the specified SendDirectionRes message. Does not implicitly {@link protocol.SendDirectionRes.verify|verify} messages.
         * @param message SendDirectionRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISendDirectionRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDirectionRes message, length delimited. Does not implicitly {@link protocol.SendDirectionRes.verify|verify} messages.
         * @param message SendDirectionRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISendDirectionRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDirectionRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDirectionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SendDirectionRes;

        /**
         * Decodes a SendDirectionRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDirectionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SendDirectionRes;

        /**
         * Verifies a SendDirectionRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDirectionRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDirectionRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.SendDirectionRes;

        /**
         * Creates a plain object from a SendDirectionRes message. Also converts values to other types if specified.
         * @param message SendDirectionRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SendDirectionRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDirectionRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendDirectionRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Vec2. */
    interface IVec2 {

        /** Vec2 x */
        x?: (number|null);

        /** Vec2 y */
        y?: (number|null);
    }

    /** Represents a Vec2. */
    class Vec2 implements IVec2 {

        /**
         * Constructs a new Vec2.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IVec2);

        /** Vec2 x. */
        public x: number;

        /** Vec2 y. */
        public y: number;

        /**
         * Creates a new Vec2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vec2 instance
         */
        public static create(properties?: protocol.IVec2): protocol.Vec2;

        /**
         * Encodes the specified Vec2 message. Does not implicitly {@link protocol.Vec2.verify|verify} messages.
         * @param message Vec2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link protocol.Vec2.verify|verify} messages.
         * @param message Vec2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vec2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Vec2;

        /**
         * Decodes a Vec2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Vec2;

        /**
         * Verifies a Vec2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vec2
         */
        public static fromObject(object: { [k: string]: any }): protocol.Vec2;

        /**
         * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
         * @param message Vec2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Vec2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vec2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Vec2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerFrame. */
    interface IPlayerFrame {

        /** PlayerFrame pid */
        pid?: (number|null);

        /** PlayerFrame direction */
        direction?: (number|null);

        /** PlayerFrame newfood */
        newfood?: (protocol.IVec2|null);
    }

    /** Represents a PlayerFrame. */
    class PlayerFrame implements IPlayerFrame {

        /**
         * Constructs a new PlayerFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerFrame);

        /** PlayerFrame pid. */
        public pid: number;

        /** PlayerFrame direction. */
        public direction: number;

        /** PlayerFrame newfood. */
        public newfood?: (protocol.IVec2|null);

        /**
         * Creates a new PlayerFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerFrame instance
         */
        public static create(properties?: protocol.IPlayerFrame): protocol.PlayerFrame;

        /**
         * Encodes the specified PlayerFrame message. Does not implicitly {@link protocol.PlayerFrame.verify|verify} messages.
         * @param message PlayerFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerFrame message, length delimited. Does not implicitly {@link protocol.PlayerFrame.verify|verify} messages.
         * @param message PlayerFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.PlayerFrame;

        /**
         * Decodes a PlayerFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.PlayerFrame;

        /**
         * Verifies a PlayerFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerFrame
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerFrame;

        /**
         * Creates a plain object from a PlayerFrame message. Also converts values to other types if specified.
         * @param message PlayerFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BroadcastFrame. */
    interface IBroadcastFrame {

        /** BroadcastFrame index */
        index?: (number|null);

        /** BroadcastFrame players */
        players?: (protocol.IPlayerFrame[]|null);
    }

    /** Represents a BroadcastFrame. */
    class BroadcastFrame implements IBroadcastFrame {

        /**
         * Constructs a new BroadcastFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBroadcastFrame);

        /** BroadcastFrame index. */
        public index: number;

        /** BroadcastFrame players. */
        public players: protocol.IPlayerFrame[];

        /**
         * Creates a new BroadcastFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastFrame instance
         */
        public static create(properties?: protocol.IBroadcastFrame): protocol.BroadcastFrame;

        /**
         * Encodes the specified BroadcastFrame message. Does not implicitly {@link protocol.BroadcastFrame.verify|verify} messages.
         * @param message BroadcastFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBroadcastFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastFrame message, length delimited. Does not implicitly {@link protocol.BroadcastFrame.verify|verify} messages.
         * @param message BroadcastFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBroadcastFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BroadcastFrame;

        /**
         * Decodes a BroadcastFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BroadcastFrame;

        /**
         * Verifies a BroadcastFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastFrame
         */
        public static fromObject(object: { [k: string]: any }): protocol.BroadcastFrame;

        /**
         * Creates a plain object from a BroadcastFrame message. Also converts values to other types if specified.
         * @param message BroadcastFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BroadcastFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BroadcastFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetIndexFrameReq. */
    interface IGetIndexFrameReq {

        /** GetIndexFrameReq index */
        index?: (number|null);
    }

    /** Represents a GetIndexFrameReq. */
    class GetIndexFrameReq implements IGetIndexFrameReq {

        /**
         * Constructs a new GetIndexFrameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGetIndexFrameReq);

        /** GetIndexFrameReq index. */
        public index: number;

        /**
         * Creates a new GetIndexFrameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetIndexFrameReq instance
         */
        public static create(properties?: protocol.IGetIndexFrameReq): protocol.GetIndexFrameReq;

        /**
         * Encodes the specified GetIndexFrameReq message. Does not implicitly {@link protocol.GetIndexFrameReq.verify|verify} messages.
         * @param message GetIndexFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGetIndexFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetIndexFrameReq message, length delimited. Does not implicitly {@link protocol.GetIndexFrameReq.verify|verify} messages.
         * @param message GetIndexFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGetIndexFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetIndexFrameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetIndexFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GetIndexFrameReq;

        /**
         * Decodes a GetIndexFrameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetIndexFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GetIndexFrameReq;

        /**
         * Verifies a GetIndexFrameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetIndexFrameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetIndexFrameReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.GetIndexFrameReq;

        /**
         * Creates a plain object from a GetIndexFrameReq message. Also converts values to other types if specified.
         * @param message GetIndexFrameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GetIndexFrameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetIndexFrameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetIndexFrameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetIndexFrameRes. */
    interface IGetIndexFrameRes {

        /** GetIndexFrameRes code */
        code?: (number|null);

        /** GetIndexFrameRes frame */
        frame?: (protocol.IBroadcastFrame|null);
    }

    /** Represents a GetIndexFrameRes. */
    class GetIndexFrameRes implements IGetIndexFrameRes {

        /**
         * Constructs a new GetIndexFrameRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGetIndexFrameRes);

        /** GetIndexFrameRes code. */
        public code: number;

        /** GetIndexFrameRes frame. */
        public frame?: (protocol.IBroadcastFrame|null);

        /**
         * Creates a new GetIndexFrameRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetIndexFrameRes instance
         */
        public static create(properties?: protocol.IGetIndexFrameRes): protocol.GetIndexFrameRes;

        /**
         * Encodes the specified GetIndexFrameRes message. Does not implicitly {@link protocol.GetIndexFrameRes.verify|verify} messages.
         * @param message GetIndexFrameRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGetIndexFrameRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetIndexFrameRes message, length delimited. Does not implicitly {@link protocol.GetIndexFrameRes.verify|verify} messages.
         * @param message GetIndexFrameRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGetIndexFrameRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetIndexFrameRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetIndexFrameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GetIndexFrameRes;

        /**
         * Decodes a GetIndexFrameRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetIndexFrameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GetIndexFrameRes;

        /**
         * Verifies a GetIndexFrameRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetIndexFrameRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetIndexFrameRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.GetIndexFrameRes;

        /**
         * Creates a plain object from a GetIndexFrameRes message. Also converts values to other types if specified.
         * @param message GetIndexFrameRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GetIndexFrameRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetIndexFrameRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetIndexFrameRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EatFoodReq. */
    interface IEatFoodReq {

        /** EatFoodReq food */
        food?: (protocol.IVec2|null);
    }

    /** Represents an EatFoodReq. */
    class EatFoodReq implements IEatFoodReq {

        /**
         * Constructs a new EatFoodReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEatFoodReq);

        /** EatFoodReq food. */
        public food?: (protocol.IVec2|null);

        /**
         * Creates a new EatFoodReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EatFoodReq instance
         */
        public static create(properties?: protocol.IEatFoodReq): protocol.EatFoodReq;

        /**
         * Encodes the specified EatFoodReq message. Does not implicitly {@link protocol.EatFoodReq.verify|verify} messages.
         * @param message EatFoodReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEatFoodReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EatFoodReq message, length delimited. Does not implicitly {@link protocol.EatFoodReq.verify|verify} messages.
         * @param message EatFoodReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEatFoodReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EatFoodReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EatFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.EatFoodReq;

        /**
         * Decodes an EatFoodReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EatFoodReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.EatFoodReq;

        /**
         * Verifies an EatFoodReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EatFoodReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EatFoodReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.EatFoodReq;

        /**
         * Creates a plain object from an EatFoodReq message. Also converts values to other types if specified.
         * @param message EatFoodReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EatFoodReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EatFoodReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EatFoodReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EatFoodRes. */
    interface IEatFoodRes {

        /** EatFoodRes code */
        code?: (number|null);
    }

    /** Represents an EatFoodRes. */
    class EatFoodRes implements IEatFoodRes {

        /**
         * Constructs a new EatFoodRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEatFoodRes);

        /** EatFoodRes code. */
        public code: number;

        /**
         * Creates a new EatFoodRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EatFoodRes instance
         */
        public static create(properties?: protocol.IEatFoodRes): protocol.EatFoodRes;

        /**
         * Encodes the specified EatFoodRes message. Does not implicitly {@link protocol.EatFoodRes.verify|verify} messages.
         * @param message EatFoodRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEatFoodRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EatFoodRes message, length delimited. Does not implicitly {@link protocol.EatFoodRes.verify|verify} messages.
         * @param message EatFoodRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEatFoodRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EatFoodRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EatFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.EatFoodRes;

        /**
         * Decodes an EatFoodRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EatFoodRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.EatFoodRes;

        /**
         * Verifies an EatFoodRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EatFoodRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EatFoodRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.EatFoodRes;

        /**
         * Creates a plain object from an EatFoodRes message. Also converts values to other types if specified.
         * @param message EatFoodRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EatFoodRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EatFoodRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EatFoodRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GamePlayerEndReq. */
    interface IGamePlayerEndReq {
    }

    /** Represents a GamePlayerEndReq. */
    class GamePlayerEndReq implements IGamePlayerEndReq {

        /**
         * Constructs a new GamePlayerEndReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGamePlayerEndReq);

        /**
         * Creates a new GamePlayerEndReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePlayerEndReq instance
         */
        public static create(properties?: protocol.IGamePlayerEndReq): protocol.GamePlayerEndReq;

        /**
         * Encodes the specified GamePlayerEndReq message. Does not implicitly {@link protocol.GamePlayerEndReq.verify|verify} messages.
         * @param message GamePlayerEndReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGamePlayerEndReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamePlayerEndReq message, length delimited. Does not implicitly {@link protocol.GamePlayerEndReq.verify|verify} messages.
         * @param message GamePlayerEndReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGamePlayerEndReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamePlayerEndReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePlayerEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GamePlayerEndReq;

        /**
         * Decodes a GamePlayerEndReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePlayerEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GamePlayerEndReq;

        /**
         * Verifies a GamePlayerEndReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamePlayerEndReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamePlayerEndReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.GamePlayerEndReq;

        /**
         * Creates a plain object from a GamePlayerEndReq message. Also converts values to other types if specified.
         * @param message GamePlayerEndReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GamePlayerEndReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamePlayerEndReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GamePlayerEndReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GamePlayerEndRes. */
    interface IGamePlayerEndRes {

        /** GamePlayerEndRes code */
        code?: (number|null);
    }

    /** Represents a GamePlayerEndRes. */
    class GamePlayerEndRes implements IGamePlayerEndRes {

        /**
         * Constructs a new GamePlayerEndRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGamePlayerEndRes);

        /** GamePlayerEndRes code. */
        public code: number;

        /**
         * Creates a new GamePlayerEndRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePlayerEndRes instance
         */
        public static create(properties?: protocol.IGamePlayerEndRes): protocol.GamePlayerEndRes;

        /**
         * Encodes the specified GamePlayerEndRes message. Does not implicitly {@link protocol.GamePlayerEndRes.verify|verify} messages.
         * @param message GamePlayerEndRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGamePlayerEndRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamePlayerEndRes message, length delimited. Does not implicitly {@link protocol.GamePlayerEndRes.verify|verify} messages.
         * @param message GamePlayerEndRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGamePlayerEndRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamePlayerEndRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePlayerEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GamePlayerEndRes;

        /**
         * Decodes a GamePlayerEndRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePlayerEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GamePlayerEndRes;

        /**
         * Verifies a GamePlayerEndRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamePlayerEndRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamePlayerEndRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.GamePlayerEndRes;

        /**
         * Creates a plain object from a GamePlayerEndRes message. Also converts values to other types if specified.
         * @param message GamePlayerEndRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GamePlayerEndRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamePlayerEndRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GamePlayerEndRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGamePlayerEnd. */
    interface INotifyGamePlayerEnd {

        /** NotifyGamePlayerEnd pid */
        pid?: (number|null);
    }

    /** Represents a NotifyGamePlayerEnd. */
    class NotifyGamePlayerEnd implements INotifyGamePlayerEnd {

        /**
         * Constructs a new NotifyGamePlayerEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyGamePlayerEnd);

        /** NotifyGamePlayerEnd pid. */
        public pid: number;

        /**
         * Creates a new NotifyGamePlayerEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGamePlayerEnd instance
         */
        public static create(properties?: protocol.INotifyGamePlayerEnd): protocol.NotifyGamePlayerEnd;

        /**
         * Encodes the specified NotifyGamePlayerEnd message. Does not implicitly {@link protocol.NotifyGamePlayerEnd.verify|verify} messages.
         * @param message NotifyGamePlayerEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyGamePlayerEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGamePlayerEnd message, length delimited. Does not implicitly {@link protocol.NotifyGamePlayerEnd.verify|verify} messages.
         * @param message NotifyGamePlayerEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyGamePlayerEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGamePlayerEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGamePlayerEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyGamePlayerEnd;

        /**
         * Decodes a NotifyGamePlayerEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGamePlayerEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyGamePlayerEnd;

        /**
         * Verifies a NotifyGamePlayerEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGamePlayerEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGamePlayerEnd
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyGamePlayerEnd;

        /**
         * Creates a plain object from a NotifyGamePlayerEnd message. Also converts values to other types if specified.
         * @param message NotifyGamePlayerEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyGamePlayerEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGamePlayerEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGamePlayerEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGameOver. */
    interface INotifyGameOver {
    }

    /** Represents a NotifyGameOver. */
    class NotifyGameOver implements INotifyGameOver {

        /**
         * Constructs a new NotifyGameOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotifyGameOver);

        /**
         * Creates a new NotifyGameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameOver instance
         */
        public static create(properties?: protocol.INotifyGameOver): protocol.NotifyGameOver;

        /**
         * Encodes the specified NotifyGameOver message. Does not implicitly {@link protocol.NotifyGameOver.verify|verify} messages.
         * @param message NotifyGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotifyGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameOver message, length delimited. Does not implicitly {@link protocol.NotifyGameOver.verify|verify} messages.
         * @param message NotifyGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotifyGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NotifyGameOver;

        /**
         * Decodes a NotifyGameOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NotifyGameOver;

        /**
         * Verifies a NotifyGameOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameOver
         */
        public static fromObject(object: { [k: string]: any }): protocol.NotifyGameOver;

        /**
         * Creates a plain object from a NotifyGameOver message. Also converts values to other types if specified.
         * @param message NotifyGameOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NotifyGameOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGameOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SysncFramesReq. */
    interface ISysncFramesReq {

        /** SysncFramesReq start */
        start?: (number|null);

        /** SysncFramesReq end */
        end?: (number|null);
    }

    /** Represents a SysncFramesReq. */
    class SysncFramesReq implements ISysncFramesReq {

        /**
         * Constructs a new SysncFramesReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISysncFramesReq);

        /** SysncFramesReq start. */
        public start: number;

        /** SysncFramesReq end. */
        public end: number;

        /**
         * Creates a new SysncFramesReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SysncFramesReq instance
         */
        public static create(properties?: protocol.ISysncFramesReq): protocol.SysncFramesReq;

        /**
         * Encodes the specified SysncFramesReq message. Does not implicitly {@link protocol.SysncFramesReq.verify|verify} messages.
         * @param message SysncFramesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISysncFramesReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SysncFramesReq message, length delimited. Does not implicitly {@link protocol.SysncFramesReq.verify|verify} messages.
         * @param message SysncFramesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISysncFramesReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SysncFramesReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SysncFramesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SysncFramesReq;

        /**
         * Decodes a SysncFramesReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SysncFramesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SysncFramesReq;

        /**
         * Verifies a SysncFramesReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SysncFramesReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SysncFramesReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.SysncFramesReq;

        /**
         * Creates a plain object from a SysncFramesReq message. Also converts values to other types if specified.
         * @param message SysncFramesReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SysncFramesReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SysncFramesReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SysncFramesReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SysncFramesRes. */
    interface ISysncFramesRes {

        /** SysncFramesRes code */
        code?: (number|null);

        /** SysncFramesRes frames */
        frames?: (protocol.IBroadcastFrame[]|null);
    }

    /** Represents a SysncFramesRes. */
    class SysncFramesRes implements ISysncFramesRes {

        /**
         * Constructs a new SysncFramesRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISysncFramesRes);

        /** SysncFramesRes code. */
        public code: number;

        /** SysncFramesRes frames. */
        public frames: protocol.IBroadcastFrame[];

        /**
         * Creates a new SysncFramesRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SysncFramesRes instance
         */
        public static create(properties?: protocol.ISysncFramesRes): protocol.SysncFramesRes;

        /**
         * Encodes the specified SysncFramesRes message. Does not implicitly {@link protocol.SysncFramesRes.verify|verify} messages.
         * @param message SysncFramesRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISysncFramesRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SysncFramesRes message, length delimited. Does not implicitly {@link protocol.SysncFramesRes.verify|verify} messages.
         * @param message SysncFramesRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISysncFramesRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SysncFramesRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SysncFramesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SysncFramesRes;

        /**
         * Decodes a SysncFramesRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SysncFramesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SysncFramesRes;

        /**
         * Verifies a SysncFramesRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SysncFramesRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SysncFramesRes
         */
        public static fromObject(object: { [k: string]: any }): protocol.SysncFramesRes;

        /**
         * Creates a plain object from a SysncFramesRes message. Also converts values to other types if specified.
         * @param message SysncFramesRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SysncFramesRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SysncFramesRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SysncFramesRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
