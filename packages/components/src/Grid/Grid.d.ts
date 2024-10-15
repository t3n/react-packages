import { AlignItemsProps, HeightProps, JustifyContentProps, SpaceProps } from 'styled-system';
export interface GridProps extends JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
declare const Grid: import("styled-components").StyledComponent<"div", any, {
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    suppressHydrationWarning?: boolean | undefined;
    className?: string | undefined;
    color?: string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    role?: import("react").AriaRole | undefined;
    tabIndex?: number | undefined;
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
    children?: import("react").ReactNode | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
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
    ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
    theme: any;
    vertical: boolean;
    reverse: boolean;
    wide: boolean;
    noGap: boolean;
    justifyContent: string;
} & GridProps, "slot" | "style" | "title" | "theme" | "ref" | "suppressHydrationWarning" | "className" | "color" | "id" | "lang" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "autoCapitalize" | "autoFocus" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "enterKeyHint" | "hidden" | "nonce" | "spellCheck" | "translate" | "radioGroup" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "reverse" | "justifyContent" | "vertical" | "wide" | "noGap">;
export default Grid;
