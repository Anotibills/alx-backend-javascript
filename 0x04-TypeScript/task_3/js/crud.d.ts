import * as Interface from './interface';

type RowElement = Interface.RowElement;
type RowID = Interface.RowID;

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
