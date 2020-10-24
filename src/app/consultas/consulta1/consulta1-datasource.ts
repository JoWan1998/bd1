import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {ApiService} from '../../services/api.service';

export let EXAMPLE_DATA: any = [];

/**
 * Data source for the Consulta1 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class Consulta1DataSource extends DataSource<any> {
  data: any = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(public restApi: ApiService) {
    super();
  }

  // tslint:disable-next-line:typedef
  loadConsulta1()
  {
    return this.restApi.getInvestigadores().subscribe((data: {}) => {
      this.data = data;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any> {
    // Combine everything that affects the rendered data into one update
    this.loadConsulta1();
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  // tslint:disable-next-line:typedef
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // tslint:disable-next-line:typedef
  private getPagedData(data: any) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // tslint:disable-next-line:typedef
  private getSortedData(data: any) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Profesional': return compare(a.PROFESIONAL, b.PROFESIONAL, isAsc);
        case 'Inventos_Asignados': return compare(+a.INVENTOS_ASIGNADOS, +b.INVENTOS_ASIGNADOS, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// tslint:disable-next-line:typedef
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
