import { ReactNode } from 'react';
import { SpaceProps, TextColorProps } from 'styled-system';
import { LinkStyle } from '@t3n/theme/src/theme/linkStyles';
import { TextProps } from '../Text';
export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export interface LinkProps extends TextColorProps, SpaceProps {
    small?: TextProps['small'];
    disabled?: boolean;
    variant?: LinkVariantType;
    children: ReactNode;
}
export type LinkState = 'default' | 'hover' | 'focus' | 'visited';
export declare const createLinkStyle: (linkStyleConfig: LinkStyle) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Omit<LinkProps, "children">, any>>;
export declare const linkStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<LinkProps, any>>;
declare const Link: import("styled-components").StyledComponent<"a", any, {
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    suppressHydrationWarning?: boolean | undefined;
    className?: string | undefined;
    color?: string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    media?: string | undefined;
    target?: import("react").HTMLAttributeAnchorTarget | undefined;
    type?: string | undefined;
    role?: import("react").AriaRole | undefined;
    tabIndex?: number | undefined;
    href?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: ReactNode | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLAnchorElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLAnchorElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLAnchorElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLAnchorElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLAnchorElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLAnchorElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLAnchorElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLAnchorElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLAnchorElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLAnchorElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLAnchorElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLAnchorElement> | undefined;
    key?: import("react").Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
    autoFocus?: boolean | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    hidden?: boolean | undefined;
    nonce?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    download?: any;
    hrefLang?: string | undefined;
    ping?: string | undefined;
    referrerPolicy?: import("react").HTMLAttributeReferrerPolicy | undefined;
    ref?: ((instance: HTMLAnchorElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
    theme: any;
    variant: string;
} & LinkProps, "slot" | "style" | "title" | "theme" | "ref" | "suppressHydrationWarning" | "className" | "color" | "id" | "lang" | "media" | "target" | "type" | "role" | "tabIndex" | "href" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "autoCapitalize" | "autoFocus" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "enterKeyHint" | "hidden" | "nonce" | "spellCheck" | "translate" | "radioGroup" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "download" | "hrefLang" | "ping" | "referrerPolicy" | "variant">;
export default Link;
