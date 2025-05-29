import { ProductService } from './../services/product.service';
import { Component, computed, DestroyRef, inject, input, signal } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { rxResource, takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  readonly product = input.required<Product>();

  readonly router = inject(Router);

  private ProductService = inject(ProductService);

  private destroyRef = inject(DestroyRef);

  readonly searchControl = new FormControl<string | undefined>(undefined, { nonNullable: true });

  readonly productName = toSignal(
    this.searchControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)),
    {
      initialValue: undefined,
    }
  );

  readonly pageIndex = signal(1);

  readonly pageSize = signal(5);

  private readonly data = rxResource({
    request: () => ({ name: this.productName(), pageIndex: this.pageIndex(), pageSize: this.pageSize() }),
    defaultValue: { data: [], count: 0 },
    loader: ({ request }) => {
      const { name, pageIndex, pageSize } = request;
      return this.ProductService.getList(name, pageIndex, pageSize);
    },
  });

  readonly totalCount = computed(() => {
    const { count } = this.data.value();
    return count;
  });

  readonly products = computed(() => {
    const { data } = this.data.value();
    return data;
  });

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product().id]);
  }

  onRemove(p: Product): void {
    this.ProductService.remove(p.id).subscribe(() => {
      this.router.navigate(['products']);
    });
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
