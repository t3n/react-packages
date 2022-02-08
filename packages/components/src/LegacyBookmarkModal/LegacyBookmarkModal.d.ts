import React from 'react';
export interface LegacyBookmarkModalProps {
    pocketLink: string;
    onClose: () => void;
}
declare const LegacyBookmarkModal: React.FC<LegacyBookmarkModalProps>;
export default LegacyBookmarkModal;
