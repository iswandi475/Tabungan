/**
 * NAGBUNG KITA — Backend V2 + HTML V4 EMBEDDED BASE64
 * Iswandi ❤️ Natasya
 * Google Apps Script + Google Sheets
 *
 * 1) Paste seluruh kode ini ke Code.gs.
 * 2) Jalankan setupDatabase() sekali dan izinkan akses.
 * 3) Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone with the link
 *
 * HTML V4 sudah tertanam di bawah sebagai HTML_B64.
 */

const HTML_B64 =
  'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImlkIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRl' +
  'bnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPgo8dGl0bGU+TmFidW5nIEtpdGEg4oCUIElzd2FuZGkgJiBOYXRhc3lhPC90aXRsZT4K' +
  'PHN0eWxlPgoqe2JveC1zaXppbmc6Ym9yZGVyLWJveH1ib2R5e21hcmdpbjowO2JhY2tncm91bmQ6I2Y2ZjdmYjtjb2xvcjojMTcxOTIzO2ZvbnQtZmFtaWx5' +
  'OkludGVyLHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLCJTZWdvZSBVSSIsc2Fucy1zZXJpZn1idXR0b24saW5wdXQsc2VsZWN0e2ZvbnQ6aW5oZXJpdH0uYXBw' +
  'e21heC13aWR0aDo0ODBweDttYXJnaW46YXV0bzttaW4taGVpZ2h0OjEwMHZoO3BhZGRpbmctYm90dG9tOjgycHg7YmFja2dyb3VuZDojZjZmN2ZifWhlYWRl' +
  'cntiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNDVkZWcsI2ZmNWI4ZCwjZmY4ODZiKTtjb2xvcjp3aGl0ZTtwYWRkaW5nOjI0cHggMjBweCAyMHB4O2Jv' +
  'cmRlci1yYWRpdXM6MCAwIDMycHggMzJweH0udG9we2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50' +
  'ZXJ9LmJyYW5kIHNtYWxse29wYWNpdHk6Ljg4fS5icmFuZCBoMXttYXJnaW46NHB4IDAgMDtmb250LXNpemU6MjNweH0ucmluZ3t3aWR0aDo0NXB4O2hlaWdo' +
  'dDo0NXB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDojZmZmMjtib3JkZXI6MXB4IHNvbGlk' +
  'ICNmZmY0O2ZvbnQtc2l6ZToyMnB4fS5jb3VudGRvd257bWFyZ2luLXRvcDoxN3B4O3BhZGRpbmc6MTBweCAxM3B4O2JhY2tncm91bmQ6I2ZmZjI7Ym9yZGVy' +
  'LXJhZGl1czoxNXB4O2ZvbnQtc2l6ZToxMnB4fS5jb3VudGRvd24gYntmb250LXNpemU6MTZweH0uYW1vdW50e2ZvbnQtc2l6ZTozNXB4O2ZvbnQtd2VpZ2h0' +
  'Ojg1MDttYXJnaW4tdG9wOjE0cHh9LmxhYmVse2ZvbnQtc2l6ZToxMnB4O29wYWNpdHk6Ljg4fS5iYXJ7aGVpZ2h0OjEwcHg7YmFja2dyb3VuZDojZmZmNDti' +
  'b3JkZXItcmFkaXVzOjk5cHg7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjoxMXB4IDAgN3B4fS5iYXIgaXtkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO2JhY2tn' +
  'cm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjk5cHg7d2lkdGg6MTcuNSV9Lm1ldGF7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVu' +
  'O2ZvbnQtc2l6ZToxMnB4O29wYWNpdHk6Ljl9bWFpbntwYWRkaW5nOjE3cHggMTVweH0uY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoyMnB4' +
  'O3BhZGRpbmc6MThweDttYXJnaW4tYm90dG9tOjE0cHg7Ym94LXNoYWRvdzowIDdweCAyNXB4ICMxNjE5MjcwYn0udGl0bGV7ZGlzcGxheTpmbGV4O2p1c3Rp' +
  'ZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjE0cHh9LnRpdGxlIGgye2ZvbnQtc2l6ZToxNnB4O21h' +
  'cmdpbjowfS5tdXRlZHtmb250LXNpemU6MTJweDtjb2xvcjojOGI4ZTlkfS5wZW9wbGV7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIg' +
  'MWZyO2dhcDoxMHB4fS5wZXJzb257YmFja2dyb3VuZDojZmFmYWZkO2JvcmRlcjoxcHggc29saWQgI2VkZWRmMztib3JkZXItcmFkaXVzOjE3cHg7cGFkZGlu' +
  'ZzoxM3B4fS5wZXJzb24gYntkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6NXB4O2ZvbnQtc2l6ZToxM3B4fS5wZXJzb24gc3Ryb25ne2Rpc3BsYXk6YmxvY2s7' +
  'Zm9udC1zaXplOjE3cHg7bWFyZ2luLXRvcDoycHh9Lm1pbml7Zm9udC1zaXplOjExcHg7Y29sb3I6IzkxOTRhMTttYXJnaW4tdG9wOjVweH0uYWN0aW9uc3tk' +
  'aXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjEwcHg7bWFyZ2luLWJvdHRvbToxNHB4fS5hY3Rpb257Ym9yZGVyOjA7YmFj' +
  'a2dyb3VuZDojZmZmO3RleHQtYWxpZ246bGVmdDtib3JkZXItcmFkaXVzOjE5cHg7cGFkZGluZzoxNnB4O2JveC1zaGFkb3c6MCA3cHggMjVweCAjMTYxOTI3' +
  'MGI7Y3Vyc29yOnBvaW50ZXJ9LmFjdGlvbiAuaWNve2ZvbnQtc2l6ZToyM3B4fS5hY3Rpb24gYntkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6NnB4fS5hY3Rp' +
  'b24gc21hbGx7Y29sb3I6IzkwOTNhMH0udGFyZ2V0LWxpbmV7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1z' +
  'OmNlbnRlcn0udGFyZ2V0LWxpbmUgYntmb250LXNpemU6MTRweH0ucHJvZ3Jlc3N7aGVpZ2h0OjhweDtiYWNrZ3JvdW5kOiNlYmVkZjM7Ym9yZGVyLXJhZGl1' +
  'czo5OXB4O292ZXJmbG93OmhpZGRlbjttYXJnaW46MTBweCAwIDdweH0ucHJvZ3Jlc3Mgc3BhbntkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO2JhY2tncm91' +
  'bmQ6I2ZmNjY4ZTtib3JkZXItcmFkaXVzOjk5cHg7d2lkdGg6MTcuNSV9LnN0YXRze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFm' +
  'ciAxZnI7Z2FwOjhweH0uc3RhdHtiYWNrZ3JvdW5kOiNmYWZhZmQ7Ym9yZGVyLXJhZGl1czoxNXB4O3BhZGRpbmc6MTJweH0uc3RhdCBzbWFsbHtjb2xvcjoj' +
  'OTA5M2EwO2ZvbnQtc2l6ZToxMHB4fS5zdGF0IGJ7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjVweDtmb250LXNpemU6MTNweH0uY2hhcnR7aGVpZ2h0OjEy' +
  'NXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LWVuZDtnYXA6OXB4O3BhZGRpbmc6MTBweCAycHggMH0uY29se2ZsZXg6MTt0ZXh0LWFsaWduOmNl' +
  'bnRlcn0uY29sIGl7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjZmY2NjhlLCNmZjk2NzkpO2JvcmRlci1yYWRpdXM6OHB4IDhw' +
  'eCAzcHggM3B4O21pbi1oZWlnaHQ6MTBweH0uY29sIHNtYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjlweDtjb2xvcjojOTk5O21hcmdpbi10b3A6NXB4' +
  'fS50eHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MTJweCAwO2JvcmRlci1i' +
  'b3R0b206MXB4IHNvbGlkICNmMGYwZjR9LnR4Omxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbTowfS50eGx7ZGlzcGxheTpmbGV4O2dhcDoxMHB4O2FsaWduLWl0' +
  'ZW1zOmNlbnRlcn0udHhpY297d2lkdGg6MzhweDtoZWlnaHQ6MzhweDtib3JkZXItcmFkaXVzOjEzcHg7YmFja2dyb3VuZDojZmZmMGY0O2Rpc3BsYXk6Z3Jp' +
  'ZDtwbGFjZS1pdGVtczpjZW50ZXJ9LnR4IGJ7Zm9udC1zaXplOjEzcHh9LnR4IHNtYWxse2Rpc3BsYXk6YmxvY2s7Y29sb3I6IzkxOTRhMTtmb250LXNpemU6' +
  'MTBweDttYXJnaW4tdG9wOjJweH0ucGx1c3tjb2xvcjojMTJhNTZiO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0Ojc1MH0ubWludXN7Y29sb3I6I2VmNWQ2' +
  'ODtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo3NTB9Lm5vdGljZXtiYWNrZ3JvdW5kOiNmZmY0ZTg7Ym9yZGVyOjFweCBzb2xpZCAjZmZlMmMyO2JvcmRl' +
  'ci1yYWRpdXM6MTZweDtwYWRkaW5nOjEycHg7Zm9udC1zaXplOjEycHh9Lm5vdGljZSBie2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbTo0cHh9bmF2e3Bv' +
  'c2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3dpZHRoOm1pbig0ODBweCwxMDAlKTtoZWlnaHQ6NzJw' +
  'eDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZWVmMztkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg1' +
  'LDFmcik7ei1pbmRleDo1fW5hdiBidXR0b257Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO2NvbG9yOiM5NzlhYTg7Zm9udC1zaXplOjEwcHh9bmF2IGJ1dHRv' +
  'bi5hY3RpdmV7Y29sb3I6I2ZmNWU4ZDtmb250LXdlaWdodDo3MDB9bmF2IHNwYW57ZGlzcGxheTpibG9jaztmb250LXNpemU6MjBweDttYXJnaW4tYm90dG9t' +
  'OjNweH0uZmFie3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjVweCBzb2xpZCAjZmZmO2JhY2tncm91bmQ6I2ZmNjI4' +
  'ZDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyN3B4O2xpbmUtaGVpZ2h0OjM1cHg7bWFyZ2luOi0yMHB4IGF1dG8gMDtib3gtc2hhZG93OjAgOHB4IDE4cHggI2Zm' +
  'NjI4ZDU1fS5tb2RhbHtwb3NpdGlvbjpmaXhlZDtpbnNldDowO2JhY2tncm91bmQ6IzAwMDc7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmZsZXgtZW5kO3ot' +
  'aW5kZXg6MTB9Lm1vZGFsLnNob3d7ZGlzcGxheTpmbGV4fS5zaGVldHt3aWR0aDptaW4oNDgwcHgsMTAwJSk7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRp' +
  'dXM6MjdweCAyN3B4IDAgMDtwYWRkaW5nOjIwcHg7bWFyZ2luOmF1dG8gMCAwfS5zaGVldCBoMnttYXJnaW46MCAwIDE1cHh9LmZpZWxke21hcmdpbjoxMHB4' +
  'IDB9LmZpZWxkIGxhYmVse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjExcHg7Y29sb3I6Izc3N2I4YjttYXJnaW4tYm90dG9tOjVweH0uZmllbGQgaW5wdXQs' +
  'LmZpZWxkIHNlbGVjdHt3aWR0aDoxMDAlO3BhZGRpbmc6MTNweDtib3JkZXI6MXB4IHNvbGlkICNlNGU1ZWQ7Ym9yZGVyLXJhZGl1czoxM3B4O291dGxpbmU6' +
  'bm9uZX0uYnRue3dpZHRoOjEwMCU7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czoxNHB4O3BhZGRpbmc6MTRweDtiYWNrZ3JvdW5kOiNmZjYyOGQ7Y29sb3I6I2Zm' +
  'Zjtmb250LXdlaWdodDo4MDA7bWFyZ2luLXRvcDo4cHh9LnNlY29uZGFyeXtiYWNrZ3JvdW5kOiNmMGYxZjY7Y29sb3I6IzQ0NH0udG9hc3R7cG9zaXRpb246' +
  'Zml4ZWQ7bGVmdDo1MCU7Ym90dG9tOjg4cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7YmFja2dyb3VuZDojMjAyMjJjO2NvbG9yOiNmZmY7cGFkZGlu' +
  'ZzoxMXB4IDE1cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2ZvbnQtc2l6ZToxMnB4O2Rpc3BsYXk6bm9uZTt6LWluZGV4OjIwfUBtZWRpYShtaW4td2lkdGg6NDgx' +
  'cHgpe2JvZHl7cGFkZGluZzoyMHB4IDB9LmFwcHtib3JkZXItcmFkaXVzOjMwcHg7b3ZlcmZsb3c6aGlkZGVuO2JveC1zaGFkb3c6MCAxNXB4IDUwcHggIzEx' +
  'MTJ9bmF2e2JvcmRlci1yYWRpdXM6MCAwIDMwcHggMzBweH19CgoucHJvZmlsZS1waG90b3t3aWR0aDo3NnB4O2hlaWdodDo3NnB4O2JvcmRlci1yYWRpdXM6' +
  'NTAlO29iamVjdC1maXQ6Y292ZXI7Ym9yZGVyOjNweCBzb2xpZCAjZmZmO2JveC1zaGFkb3c6MCA1cHggMThweCAjMDAwMjtiYWNrZ3JvdW5kOiNmZmY0fQou' +
  'cHJvZmlsZS1waG90by5zbWFsbHt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O2JvcmRlci13aWR0aDoycHh9Ci5wcm9maWxlLWdyaWR7ZGlzcGxheTpncmlkO2dy' +
  'aWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoxMHB4fQoucHJvZmlsZS1ib3h7Ym9yZGVyOjFweCBzb2xpZCAjZWNlY2YyO2JhY2tncm91bmQ6I2Zh' +
  'ZmFmZDtib3JkZXItcmFkaXVzOjE2cHg7cGFkZGluZzoxMnB4fQoucHJvZmlsZS1ib3ggbGFiZWx7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTFweDtjb2xv' +
  'cjojN2Q4MTkwO21hcmdpbi1ib3R0b206NnB4fQoucHJvZmlsZS1ib3ggaW5wdXRbdHlwZT10ZXh0XSwucHJvZmlsZS1ib3ggaW5wdXRbdHlwZT1maWxlXXt3' +
  'aWR0aDoxMDAlO2ZvbnQtc2l6ZToxMnB4fQouc3luYy1ub3Rle2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiM3ZjgyOTA7YmFja2dyb3VuZDojZjVmNmZhO2JvcmRl' +
  'ci1yYWRpdXM6MTJweDtwYWRkaW5nOjEwcHg7bWFyZ2luLXRvcDoxMHB4fQouYXZhdGFyLXN0YWNre2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7' +
  'Z2FwOjhweH0KPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KPGRpdiBjbGFzcz0iYXBwIj4KPGhlYWRlcj4KIDxkaXYgY2xhc3M9InRvcCI+PGRpdiBjbGFzcz0i' +
  'YnJhbmQiPjxzbWFsbD5UYWJ1bmdhbiBQZXJuaWthaGFuPC9zbWFsbD48aDE+SXN3YW5kaSDinaTvuI8gTmF0YXN5YTwvaDE+PC9kaXY+PGRpdiBjbGFzcz0i' +
  'YXZhdGFyLXN0YWNrIj48aW1nIGlkPSJ0b3BQaG90byIgY2xhc3M9InByb2ZpbGUtcGhvdG8gc21hbGwiIHNyYz0iIiBhbHQ9IiI+PGRpdiBjbGFzcz0icmlu' +
  'ZyI+8J+SjTwvZGl2PjwvZGl2PjwvZGl2PgogPGRpdiBjbGFzcz0iY291bnRkb3duIj7wn5KNIE1lbnVqdSBIYXJpIEJhaGFnaWE8YnI+PGIgaWQ9ImRheXMi' +
  'PkF0dXIgdGFuZ2dhbCBwZXJuaWthaGFuPC9iPjwvZGl2PgogPGRpdiBjbGFzcz0ibGFiZWwiIHN0eWxlPSJtYXJnaW4tdG9wOjE1cHgiPlRvdGFsIHRhYnVu' +
  'Z2FuPC9kaXY+CiA8ZGl2IGNsYXNzPSJhbW91bnQiIGlkPSJ0b3RhbCI+UnA4Ljc1MC4wMDA8L2Rpdj4KIDxkaXYgY2xhc3M9ImJhciI+PGkgaWQ9Im1haW5C' +
  'YXIiPjwvaT48L2Rpdj4KIDxkaXYgY2xhc3M9Im1ldGEiPjxzcGFuIGlkPSJwY3QiPjE3LDUlPC9zcGFuPjxzcGFuPlRhcmdldCBScDUwLjAwMC4wMDA8L3Nw' +
  'YW4+PC9kaXY+CjwvaGVhZGVyPgo8bWFpbj4KIDxkaXYgY2xhc3M9ImNhcmQiPjxkaXYgY2xhc3M9InRpdGxlIj48aDI+S29udHJpYnVzaSBCZXJkdWE8L2gy' +
  'PjxzcGFuIGNsYXNzPSJtdXRlZCI+QmVyc2FtYTwvc3Bhbj48L2Rpdj4KICA8ZGl2IGNsYXNzPSJwZW9wbGUiPgogICA8ZGl2IGNsYXNzPSJwZXJzb24iPjxp' +
  'bWcgaWQ9Imlzd2FuZGlQaG90byIgY2xhc3M9InByb2ZpbGUtcGhvdG8iIHNyYz0iIiBhbHQ9IiI+PGIgaWQ9Imlzd2FuZGlOYW1lIj5Jc3dhbmRpPC9iPjxz' +
  'dHJvbmcgaWQ9Imlzd2FuZGkiPlJwNS4wMDAuMDAwPC9zdHJvbmc+PGRpdiBjbGFzcz0ibWluaSI+S29udHJpYnVzaTwvZGl2PjwvZGl2PgogICA8ZGl2IGNs' +
  'YXNzPSJwZXJzb24iPjxpbWcgaWQ9Im5hdGFzeWFQaG90byIgY2xhc3M9InByb2ZpbGUtcGhvdG8iIHNyYz0iIiBhbHQ9IiI+PGIgaWQ9Im5hdGFzeWFOYW1l' +
  'Ij5OYXRhc3lhPC9iPjxzdHJvbmcgaWQ9Im5hdGFzeWEiPlJwMy43NTAuMDAwPC9zdHJvbmc+PGRpdiBjbGFzcz0ibWluaSI+S29udHJpYnVzaTwvZGl2Pjwv' +
  'ZGl2PgogIDwvZGl2PgogPC9kaXY+CiA8ZGl2IGNsYXNzPSJhY3Rpb25zIj4KICA8YnV0dG9uIGNsYXNzPSJhY3Rpb24iIG9uY2xpY2s9Im9wZW5Nb2RhbCgn' +
  'c2F2ZScpIj48ZGl2IGNsYXNzPSJpY28iPvCfkrA8L2Rpdj48Yj4rIE5hYnVuZzwvYj48c21hbGw+VGFtYmFoIHRyYW5zYWtzaTwvc21hbGw+PC9idXR0b24+' +
  'CiAgPGJ1dHRvbiBjbGFzcz0iYWN0aW9uIiBvbmNsaWNrPSJvcGVuUGF5bWVudCgpIj48ZGl2IGNsYXNzPSJpY28iPvCfk7I8L2Rpdj48Yj5QZW1iYXlhcmFu' +
  'PC9iPjxzbWFsbD5RUklTIC8gdHJhbnNmZXIgQlJJPC9zbWFsbD48L2J1dHRvbj4KIDwvZGl2PgogPGRpdiBjbGFzcz0iY2FyZCI+PGRpdiBjbGFzcz0idGl0' +
  'bGUiPjxoMj7wn46vIFJlbmNhbmEgTmFidW5nPC9oMj48c3BhbiBjbGFzcz0ibXV0ZWQiPlRhcmdldCBidWxhbmFuPC9zcGFuPjwvZGl2PgogIDxkaXYgY2xh' +
  'c3M9InN0YXRzIj48ZGl2IGNsYXNzPSJzdGF0Ij48c21hbGw+VGFyZ2V0PC9zbWFsbD48Yj5ScDUwIGp0PC9iPjwvZGl2PjxkaXYgY2xhc3M9InN0YXQiPjxz' +
  'bWFsbD5UZXJrdW1wdWw8L3NtYWxsPjxiIGlkPSJzMSI+UnA4LDc1IGp0PC9iPjwvZGl2PjxkaXYgY2xhc3M9InN0YXQiPjxzbWFsbD5TaXNhPC9zbWFsbD48' +
  'YiBpZD0iczIiPlJwNDEsMjUganQ8L2I+PC9kaXY+PC9kaXY+CiAgPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDoxM3B4IiBjbGFzcz0ibm90aWNlIj48YiBpZD0i' +
  'bW9udGhseSI+UGVybHUgUnA0LjE2Ni42NjcgLyBidWxhbjwvYj5BdHVyIHRhbmdnYWwgcGVybmlrYWhhbiB1bnR1ayBtZW5naGl0dW5nIHRhcmdldCBtaW5n' +
  'Z3VhbiBzZWNhcmEgb3RvbWF0aXMuPC9kaXY+CiA8L2Rpdj4KIDxkaXYgY2xhc3M9ImNhcmQiPjxkaXYgY2xhc3M9InRpdGxlIj48aDI+8J+SjSBUYXJnZXQg' +
  'UGVybmlrYWhhbjwvaDI+PHNwYW4gY2xhc3M9Im11dGVkIiBpZD0idHBjdCI+MTcsNSU8L3NwYW4+PC9kaXY+CiAgPGRpdiBjbGFzcz0idGFyZ2V0LWxpbmUi' +
  'PjxiPkJpYXlhIFBlcm5pa2FoYW48L2I+PHNwYW4gY2xhc3M9Im11dGVkIj5ScDgsNzUganQgLyBScDUwIGp0PC9zcGFuPjwvZGl2PgogIDxkaXYgY2xhc3M9' +
  'InByb2dyZXNzIj48c3BhbiBpZD0idGFyZ2V0QmFyIj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0ibXV0ZWQiPlNpc2EgPHNwYW4gaWQ9InJlbWFpbiI+UnA0' +
  'MS4yNTAuMDAwPC9zcGFuPjwvZGl2PgogPC9kaXY+CiA8ZGl2IGNsYXNzPSJjYXJkIj48ZGl2IGNsYXNzPSJ0aXRsZSI+PGgyPvCfk4ggUGVya2VtYmFuZ2Fu' +
  'PC9oMj48c3BhbiBjbGFzcz0ibXV0ZWQiPlNpbXVsYXNpIGJ1bGFuYW48L3NwYW4+PC9kaXY+CiAgPGRpdiBjbGFzcz0iY2hhcnQiPgogICA8ZGl2IGNsYXNz' +
  'PSJjb2wiPjxpIHN0eWxlPSJoZWlnaHQ6MjUlIj48L2k+PHNtYWxsPkp1bjwvc21hbGw+PC9kaXY+PGRpdiBjbGFzcz0iY29sIj48aSBzdHlsZT0iaGVpZ2h0' +
  'OjM0JSI+PC9pPjxzbWFsbD5KdWw8L3NtYWxsPjwvZGl2PjxkaXYgY2xhc3M9ImNvbCI+PGkgc3R5bGU9ImhlaWdodDo0NCUiPjwvaT48c21hbGw+QWd0PC9z' +
  'bWFsbD48L2Rpdj48ZGl2IGNsYXNzPSJjb2wiPjxpIHN0eWxlPSJoZWlnaHQ6NTYlIj48L2k+PHNtYWxsPlNlcDwvc21hbGw+PC9kaXY+PGRpdiBjbGFzcz0i' +
  'Y29sIj48aSBzdHlsZT0iaGVpZ2h0OjcwJSI+PC9pPjxzbWFsbD5Pa3Q8L3NtYWxsPjwvZGl2PjxkaXYgY2xhc3M9ImNvbCI+PGkgc3R5bGU9ImhlaWdodDo4' +
  'NCUiPjwvaT48c21hbGw+Tm92PC9zbWFsbD48L2Rpdj4KICA8L2Rpdj4KIDwvZGl2PgogPGRpdiBjbGFzcz0iY2FyZCI+PGRpdiBjbGFzcz0idGl0bGUiPjxo' +
  'Mj7wn5OcIFRyYW5zYWtzaSBUZXJiYXJ1PC9oMj48c3BhbiBjbGFzcz0ibXV0ZWQiIG9uY2xpY2s9InNob3dUb2FzdCgnUml3YXlhdCBsZW5na2FwIGFrYW4g' +
  'dGVyc2VkaWEgZGkgbWVudSBUcmFuc2Frc2knKSI+TGloYXQgc2VtdWE8L3NwYW4+PC9kaXY+CiAgPGRpdiBpZD0idHhzIj4KICAgPGRpdiBjbGFzcz0idHgi' +
  'PjxkaXYgY2xhc3M9InR4bCI+PGRpdiBjbGFzcz0idHhpY28iPvCfkag8L2Rpdj48ZGl2PjxiPklzd2FuZGk8L2I+PHNtYWxsPjI4IFNlcCAyMDI2IOKAoiBO' +
  'YWJ1bmc8L3NtYWxsPjwvZGl2PjwvZGl2PjxzcGFuIGNsYXNzPSJwbHVzIj4rUnA1MDAuMDAwPC9zcGFuPjwvZGl2PgogICA8ZGl2IGNsYXNzPSJ0eCI+PGRp' +
  'diBjbGFzcz0idHhsIj48ZGl2IGNsYXNzPSJ0eGljbyI+8J+RqTwvZGl2PjxkaXY+PGI+TmF0YXN5YTwvYj48c21hbGw+MjcgU2VwIDIwMjYg4oCiIE5hYnVu' +
  'Zzwvc21hbGw+PC9kaXY+PC9kaXY+PHNwYW4gY2xhc3M9InBsdXMiPitScDc1MC4wMDA8L3NwYW4+PC9kaXY+CiAgIDxkaXYgY2xhc3M9InR4Ij48ZGl2IGNs' +
  'YXNzPSJ0eGwiPjxkaXYgY2xhc3M9InR4aWNvIj7wn5KNPC9kaXY+PGRpdj48Yj5EUCBEZWtvcmFzaTwvYj48c21hbGw+MjUgU2VwIDIwMjYg4oCiIFBlbmdl' +
  'bHVhcmFuPC9zbWFsbD48L2Rpdj48L2Rpdj48c3BhbiBjbGFzcz0ibWludXMiPi1ScDEuMDAwLjAwMDwvc3Bhbj48L2Rpdj4KICA8L2Rpdj4KIDwvZGl2Pgog' +
  'CiA8ZGl2IGNsYXNzPSJjYXJkIj4KICA8ZGl2IGNsYXNzPSJ0aXRsZSI+PGgyPvCfkaQgUHJvZmlsIEJlcnNhbWE8L2gyPjxzcGFuIGNsYXNzPSJtdXRlZCI+' +
  'VGVyc2ltcGFuPC9zcGFuPjwvZGl2PgogIDxkaXYgY2xhc3M9InByb2ZpbGUtZ3JpZCI+CiAgIDxkaXYgY2xhc3M9InByb2ZpbGUtYm94Ij48bGFiZWw+UHJv' +
  'ZmlsIElzd2FuZGk8L2xhYmVsPjxkaXYgaWQ9InByb2ZpbGVTdW1tYXJ5MSIgY2xhc3M9Im11dGVkIj5Jc3dhbmRpPC9kaXY+PC9kaXY+CiAgIDxkaXYgY2xh' +
  'c3M9InByb2ZpbGUtYm94Ij48bGFiZWw+UHJvZmlsIE5hdGFzeWE8L2xhYmVsPjxkaXYgaWQ9InByb2ZpbGVTdW1tYXJ5MiIgY2xhc3M9Im11dGVkIj5OYXRh' +
  'c3lhPC9kaXY+PC9kaXY+CiAgPC9kaXY+CiAgPGJ1dHRvbiBjbGFzcz0iYnRuIiBvbmNsaWNrPSJvcGVuUHJvZmlsZSgpIj7inI/vuI8gVWJhaCBGb3RvIFBy' +
  'b2ZpbDwvYnV0dG9uPgogIDxkaXYgY2xhc3M9InN5bmMtbm90ZSI+UGVydWJhaGFuIG5hbWEgZGFuIGZvdG8gcHJvZmlsIG5hbnRpbnlhIGRpc2ltcGFuIGRp' +
  'IGRhdGFiYXNlIGJlcnNhbWEuIEphZGkgc2FhdCBzYWxhaCBzYXR1IHBhc2FuZ2FuIG1lbmd1YmFobnlhLCBwZXJhbmdrYXQgcGFzYW5nYW4ganVnYSBha2Fu' +
  'IG1lbmVyaW1hIHBlcnViYWhhbiBzZXRlbGFoIHNpbmtyb25pc2FzaS48L2Rpdj4KIDwvZGl2PgoKPGRpdiBjbGFzcz0iY2FyZCI+PGRpdiBjbGFzcz0ibm90' +
  'aWNlIj48Yj7wn5KhIENhdGF0YW48L2I+VWFuZyBzZWJlbmFybnlhIHRldGFwIGJlcmFkYSBkaSByZWtlbmluZyBCUkkuIEFwbGlrYXNpIGluaSBoYW55YSBt' +
  'ZW5jYXRhdCBwcm9ncmVzIHRhYnVuZ2FuIGthbGlhbi48L2Rpdj48L2Rpdj4KPC9tYWluPgo8bmF2PgogPGJ1dHRvbiBjbGFzcz0iYWN0aXZlIj48c3Bhbj7w' +
  'n4+gPC9zcGFuPkhvbWU8L2J1dHRvbj4KIDxidXR0b24gb25jbGljaz0ic2hvd1RvYXN0KCdNZW51IFRhcmdldCDigJQgc2VnZXJhIGRpYWt0aWZrYW4nKSI+' +
  'PHNwYW4+8J+Orzwvc3Bhbj5UYXJnZXQ8L2J1dHRvbj4KIDxidXR0b24gY2xhc3M9ImZhYiIgb25jbGljaz0ib3Blbk1vZGFsKCdzYXZlJykiPis8L2J1dHRv' +
  'bj4KIDxidXR0b24gb25jbGljaz0ic2hvd1RvYXN0KCdNZW51IFRyYW5zYWtzaSDigJQgc2VnZXJhIGRpYWt0aWZrYW4nKSI+PHNwYW4+8J+TnDwvc3Bhbj5U' +
  'cmFuc2Frc2k8L2J1dHRvbj4KIDxidXR0b24gb25jbGljaz0ib3BlblByb2ZpbGUoKSI+PHNwYW4+8J+RpDwvc3Bhbj5Qcm9maWw8L2J1dHRvbj4KPC9uYXY+' +
  'CjwvZGl2PgoKPGRpdiBjbGFzcz0ibW9kYWwiIGlkPSJtb2RhbCI+PGRpdiBjbGFzcz0ic2hlZXQiPgogPGgyIGlkPSJtb2RhbFRpdGxlIj5UYW1iYWggVGFi' +
  'dW5nYW4g8J+SsDwvaDI+CiA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPkplbmlzPC9sYWJlbD48c2VsZWN0IGlkPSJ0eXBlIj48b3B0aW9uIHZhbHVlPSJz' +
  'YXZlIj5OYWJ1bmc8L29wdGlvbj48b3B0aW9uIHZhbHVlPSJleHBlbnNlIj5QZW5nZWx1YXJhbjwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PgogPGRpdiBjbGFz' +
  'cz0iZmllbGQiPjxsYWJlbD5ZYW5nIG1lbGFrdWthbjwvbGFiZWw+PHNlbGVjdCBpZD0id2hvIj48b3B0aW9uPklzd2FuZGk8L29wdGlvbj48b3B0aW9uPk5h' +
  'dGFzeWE8L29wdGlvbj48L3NlbGVjdD48L2Rpdj4KIDxkaXYgY2xhc3M9ImZpZWxkIj48bGFiZWw+Tm9taW5hbDwvbGFiZWw+PGlucHV0IGlkPSJub21pbmFs' +
  'IiB0eXBlPSJudW1iZXIiIHBsYWNlaG9sZGVyPSJDb250b2g6IDEwMDAwMCI+PC9kaXY+CiA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPkNhdGF0YW48L2xh' +
  'YmVsPjxpbnB1dCBpZD0ibm90ZSIgcGxhY2Vob2xkZXI9IkNvbnRvaDogTmFidW5nIG1pbmdndWFuIC8gRFAgZ2VkdW5nIj48L2Rpdj4KIDxidXR0b24gY2xh' +
  'c3M9ImJ0biIgb25jbGljaz0ic2F2ZVR4KCkiPlNpbXBhbjwvYnV0dG9uPjxidXR0b24gY2xhc3M9ImJ0biBzZWNvbmRhcnkiIG9uY2xpY2s9ImNsb3NlTW9k' +
  'YWwoKSI+QmF0YWw8L2J1dHRvbj4KPC9kaXY+PC9kaXY+CgoKPGRpdiBjbGFzcz0ibW9kYWwiIGlkPSJwcm9maWxlTW9kYWwiPjxkaXYgY2xhc3M9InNoZWV0' +
  'Ij4KIDxoMj5Gb3RvIFByb2ZpbCDinaTvuI88L2gyPgogPGRpdiBjbGFzcz0iZmllbGQiPjxsYWJlbD5OYW1hIElzd2FuZGk8L2xhYmVsPjxpbnB1dCBpZD0i' +
  'cElzd2FuZGkiIHR5cGU9InRleHQiIHZhbHVlPSJJc3dhbmRpIj48L2Rpdj4KIDxkaXYgY2xhc3M9ImZpZWxkIj48bGFiZWw+TmFtYSBOYXRhc3lhPC9sYWJl' +
  'bD48aW5wdXQgaWQ9InBOYXRhc3lhIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iTmF0YXN5YSI+PC9kaXY+CiA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPkZvdG8g' +
  'SXN3YW5kaTwvbGFiZWw+PGlucHV0IGlkPSJmSXN3YW5kaSIgdHlwZT0iZmlsZSIgYWNjZXB0PSJpbWFnZS8qIiBvbmNoYW5nZT0icmVhZFBob3RvKHRoaXMs' +
  'J2lzd2FuZGknKSI+PC9kaXY+CiA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPkZvdG8gTmF0YXN5YTwvbGFiZWw+PGlucHV0IGlkPSJmTmF0YXN5YSIgdHlw' +
  'ZT0iZmlsZSIgYWNjZXB0PSJpbWFnZS8qIiBvbmNoYW5nZT0icmVhZFBob3RvKHRoaXMsJ25hdGFzeWEnKSI+PC9kaXY+CiA8YnV0dG9uIGNsYXNzPSJidG4i' +
  'IG9uY2xpY2s9InNhdmVQcm9maWxlKCkiPvCfkr4gU2ltcGFuIFByb2ZpbDwvYnV0dG9uPgogPGJ1dHRvbiBjbGFzcz0iYnRuIHNlY29uZGFyeSIgb25jbGlj' +
  'az0iY2xvc2VQcm9maWxlKCkiPkJhdGFsPC9idXR0b24+CjwvZGl2PjwvZGl2PgoKPGRpdiBjbGFzcz0ibW9kYWwiIGlkPSJwYXltZW50Ij48ZGl2IGNsYXNz' +
  'PSJzaGVldCI+CiA8aDI+UGVtYmF5YXJhbiDwn5KzPC9oMj4KIDxkaXYgY2xhc3M9Im5vdGljZSI+PGI+UVJJUyAvIFRyYW5zZmVyIEJSSTwvYj48YnI+UVJJ' +
  'UyBCUkkga2FsaWFuIGJpc2EgZGlwYXNhbmcgZGkgYXJlYSBpbmkuIFVudHVrIHByZXZpZXcsIFFSIGJlbHVtIGRpaXNpLjwvZGl2PgogPGRpdiBzdHlsZT0i' +
  'aGVpZ2h0OjE3MHB4O21hcmdpbjoxNnB4IGF1dG87YmFja2dyb3VuZDojZjJmM2Y3O2JvcmRlci1yYWRpdXM6MThweDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRl' +
  'bXM6Y2VudGVyO2ZvbnQtc2l6ZTo1NXB4O3dpZHRoOjE3MHB4Ij7ilqY8L2Rpdj4KIDxidXR0b24gY2xhc3M9ImJ0biIgb25jbGljaz0iY2xvc2VQYXltZW50' +
  'KCk7c2hvd1RvYXN0KCdTaW11bGFzaSBwZW1iYXlhcmFuIGJlcmhhc2lsJykiPuKckyBTdWRhaCBCYXlhcjwvYnV0dG9uPjxidXR0b24gY2xhc3M9ImJ0biBz' +
  'ZWNvbmRhcnkiIG9uY2xpY2s9ImNsb3NlUGF5bWVudCgpIj5UdXR1cDwvYnV0dG9uPgo8L2Rpdj48L2Rpdj4KPGRpdiBjbGFzcz0idG9hc3QiIGlkPSJ0b2Fz' +
  'dCI+PC9kaXY+CjxzY3JpcHQ+CmNvbnN0IHN0YXRlPXtpc3dhbmRpOjUwMDAwMDAsbmF0YXN5YTozNzUwMDAwLHRhcmdldDo1MDAwMDAwMH07Y29uc3QgcnA9' +
  'bj0+bmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcse3N0eWxlOidjdXJyZW5jeScsY3VycmVuY3k6J0lEUicsbWF4aW11bUZyYWN0aW9uRGlnaXRzOjB9' +
  'KS5mb3JtYXQobik7CmZ1bmN0aW9uIHJlbmRlcigpe2NvbnN0IHRvdGFsPXN0YXRlLmlzd2FuZGkrc3RhdGUubmF0YXN5YSxwPU1hdGgubWluKDEwMCx0b3Rh' +
  'bC9zdGF0ZS50YXJnZXQqMTAwKSxzPU1hdGgubWF4KDAsc3RhdGUudGFyZ2V0LXRvdGFsKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS50ZXh0' +
  'Q29udGVudD1ycCh0b3RhbCk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzd2FuZGknKS50ZXh0Q29udGVudD1ycChzdGF0ZS5pc3dhbmRpKTtkb2N1bWVu' +
  'dC5nZXRFbGVtZW50QnlJZCgnbmF0YXN5YScpLnRleHRDb250ZW50PXJwKHN0YXRlLm5hdGFzeWEpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwY3QnKS50' +
  'ZXh0Q29udGVudD1wLnRvRml4ZWQoMSkucmVwbGFjZSgnLicsJywnKSsnJSc7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RwY3QnKS50ZXh0Q29udGVudD1w' +
  'LnRvRml4ZWQoMSkucmVwbGFjZSgnLicsJywnKSsnJSc7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5CYXInKS5zdHlsZS53aWR0aD1wKyclJztkb2N1' +
  'bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0QmFyJykuc3R5bGUud2lkdGg9cCsnJSc7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWFpbicpLnRleHRD' +
  'b250ZW50PXJwKHMpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzMScpLnRleHRDb250ZW50PXJwKHRvdGFsKS5yZXBsYWNlKCcsMDAnLCcnKTtkb2N1bWVu' +
  'dC5nZXRFbGVtZW50QnlJZCgnczInKS50ZXh0Q29udGVudD1ycChzKS5yZXBsYWNlKCcsMDAnLCcnKTt9CmZ1bmN0aW9uIG9wZW5Nb2RhbCh0eXBlKXtkb2N1' +
  'bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUnKS52YWx1ZT10' +
  'eXBlPT09J2V4cGVuc2UnPydleHBlbnNlJzonc2F2ZSd9CmZ1bmN0aW9uIGNsb3NlTW9kYWwoKXtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5j' +
  'bGFzc0xpc3QucmVtb3ZlKCdzaG93Jyl9CmZ1bmN0aW9uIHNhdmVUeCgpe2NvbnN0IHR5cGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUnKS52YWx1' +
  'ZSx3aG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dobycpLnZhbHVlLG49TnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21pbmFsJykudmFs' +
  'dWV8fDApLG5vdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUnKS52YWx1ZXx8dHlwZT09PSdzYXZlJz8nTmFidW5nJzonUGVuZ2VsdWFyYW4nO2lm' +
  'KG48PTApcmV0dXJuIHNob3dUb2FzdCgnTWFzdWtrYW4gbm9taW5hbCcpO2NvbnN0IGtleT13aG8udG9Mb3dlckNhc2UoKTtpZih0eXBlPT09J3NhdmUnKXN0' +
  'YXRlW2tleV0rPW47ZWxzZXtjb25zdCBzaGFyZT1NYXRoLm1pbihuLHN0YXRlW2tleV0pO3N0YXRlW2tleV0tPXNoYXJlfXJlbmRlcigpO2NvbnN0IGQ9bmV3' +
  'IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2lkLUlEJyx7ZGF5OicyLWRpZ2l0Jyxtb250aDonc2hvcnQnLHllYXI6J251bWVyaWMnfSk7Y29uc3QgaWNv' +
  'PXR5cGU9PT0nc2F2ZSc/KHdobz09PSdJc3dhbmRpJz8n8J+RqCc6J/CfkaknKTon8J+SjSc7Y29uc3QgY2xzPXR5cGU9PT0nc2F2ZSc/J3BsdXMnOidtaW51' +
  'cyc7Y29uc3Qgc2lnbj10eXBlPT09J3NhdmUnPycrJzonLSc7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4cycpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0' +
  'ZXJiZWdpbicsYDxkaXYgY2xhc3M9InR4Ij48ZGl2IGNsYXNzPSJ0eGwiPjxkaXYgY2xhc3M9InR4aWNvIj4ke2ljb308L2Rpdj48ZGl2PjxiPiR7d2hvfTwv' +
  'Yj48c21hbGw+JHtkfSDigKIgJHtub3RlfTwvc21hbGw+PC9kaXY+PC9kaXY+PHNwYW4gY2xhc3M9IiR7Y2xzfSI+JHtzaWdufSR7cnAobil9PC9zcGFuPjwv' +
  'ZGl2PmApO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21pbmFsJykudmFsdWU9Jyc7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUnKS52YWx1ZT0n' +
  'JztjbG9zZU1vZGFsKCk7c2hvd1RvYXN0KCdUcmFuc2Frc2kgYmVyaGFzaWwgZGlzaW1wYW4g4p2k77iPJyl9CmZ1bmN0aW9uIG9wZW5QYXltZW50KCl7ZG9j' +
  'dW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnQnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyl9ZnVuY3Rpb24gY2xvc2VQYXltZW50KCl7ZG9jdW1lbnQuZ2V0' +
  'RWxlbWVudEJ5SWQoJ3BheW1lbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyl9ZnVuY3Rpb24gc2hvd1RvYXN0KHQpe2NvbnN0IHg9ZG9jdW1lbnQuZ2V0' +
  'RWxlbWVudEJ5SWQoJ3RvYXN0Jyk7eC50ZXh0Q29udGVudD10O3guc3R5bGUuZGlzcGxheT0nYmxvY2snO3NldFRpbWVvdXQoKCk9Pnguc3R5bGUuZGlzcGxh' +
  'eT0nbm9uZScsMjIwMCl9Cgpjb25zdCBwcm9maWxlS2V5PSdpc3dhbmRpX25hdGFzeWFfcHJvZmlsZV92Myc7CmNvbnN0IHByb2ZpbGVEZWZhdWx0cz17CiAg' +
  'aXN3YW5kaU5hbWU6J0lzd2FuZGknLAogIG5hdGFzeWFOYW1lOidOYXRhc3lhJywKICBpc3dhbmRpUGhvdG86JycsCiAgbmF0YXN5YVBob3RvOicnLAp9Owps' +
  'ZXQgcHJvZmlsZT1PYmplY3QuYXNzaWduKHt9LHByb2ZpbGVEZWZhdWx0cyxKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2ZpbGVLZXkpfHwn' +
  'e30nKSk7CgpmdW5jdGlvbiBwbGFjZWhvbGRlcihuYW1lLGVtb2ppKXsKICBjb25zdCBzdmc9YDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv' +
  'c3ZnIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcng9IjgwIiBmaWxsPSIjZmZlN2VlIi8+PHRl' +
  'eHQgeD0iNTAlIiB5PSI1OCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iNzIiPiR7ZW1vaml9PC90ZXh0Pjwvc3ZnPmA7CiAgcmV0dXJuICdk' +
  'YXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwnK2VuY29kZVVSSUNvbXBvbmVudChzdmcpOwp9CmZ1bmN0aW9uIGFwcGx5UHJvZmlsZSgpewogIGRv' +
  'Y3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc3dhbmRpTmFtZScpLnRleHRDb250ZW50PXByb2ZpbGUuaXN3YW5kaU5hbWU7CiAgZG9jdW1lbnQuZ2V0RWxlbWVu' +
  'dEJ5SWQoJ25hdGFzeWFOYW1lJykudGV4dENvbnRlbnQ9cHJvZmlsZS5uYXRhc3lhTmFtZTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZVN1' +
  'bW1hcnkxJykudGV4dENvbnRlbnQ9cHJvZmlsZS5pc3dhbmRpTmFtZTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZVN1bW1hcnkyJykudGV4' +
  'dENvbnRlbnQ9cHJvZmlsZS5uYXRhc3lhTmFtZTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wUGhvdG8nKS5zcmM9cHJvZmlsZS5pc3dhbmRpUGhv' +
  'dG98fHBsYWNlaG9sZGVyKHByb2ZpbGUuaXN3YW5kaU5hbWUsJ/CfkagnKTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXN3YW5kaVBob3RvJykuc3Jj' +
  'PXByb2ZpbGUuaXN3YW5kaVBob3RvfHxwbGFjZWhvbGRlcihwcm9maWxlLmlzd2FuZGlOYW1lLCfwn5GoJyk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQo' +
  'J25hdGFzeWFQaG90bycpLnNyYz1wcm9maWxlLm5hdGFzeWFQaG90b3x8cGxhY2Vob2xkZXIocHJvZmlsZS5uYXRhc3lhTmFtZSwn8J+RqScpOwp9CmZ1bmN0' +
  'aW9uIG9wZW5Qcm9maWxlKCl7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BJc3dhbmRpJykudmFsdWU9cHJvZmlsZS5pc3dhbmRpTmFtZTsKICBkb2N1' +
  'bWVudC5nZXRFbGVtZW50QnlJZCgncE5hdGFzeWEnKS52YWx1ZT1wcm9maWxlLm5hdGFzeWFOYW1lOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9m' +
  'aWxlTW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7Cn0KZnVuY3Rpb24gY2xvc2VQcm9maWxlKCl7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2Zp' +
  'bGVNb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKX0KZnVuY3Rpb24gcmVhZFBob3RvKGlucHV0LHR5cGUpewogIGNvbnN0IGZpbGU9aW5wdXQuZmls' +
  'ZXMmJmlucHV0LmZpbGVzWzBdOyBpZighZmlsZSlyZXR1cm47CiAgaWYoZmlsZS5zaXplPjIqMTAyNCoxMDI0KXtzaG93VG9hc3QoJ1BpbGloIGZvdG8gbWFr' +
  'c2ltYWwgMiBNQiB1bnR1ayBwcmV2aWV3Jyk7aW5wdXQudmFsdWU9Jyc7cmV0dXJufQogIGNvbnN0IHJlYWRlcj1uZXcgRmlsZVJlYWRlcigpOwogIHJlYWRl' +
  'ci5vbmxvYWQ9KCk9Pntwcm9maWxlW3R5cGUrJ1Bob3RvJ109cmVhZGVyLnJlc3VsdDthcHBseVByb2ZpbGUoKX07CiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwo' +
  'ZmlsZSk7Cn0KZnVuY3Rpb24gc2F2ZVByb2ZpbGUoKXsKICBwcm9maWxlLmlzd2FuZGlOYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwSXN3YW5kaScp' +
  'LnZhbHVlLnRyaW0oKXx8J0lzd2FuZGknOwogIHByb2ZpbGUubmF0YXN5YU5hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BOYXRhc3lhJykudmFsdWUu' +
  'dHJpbSgpfHwnTmF0YXN5YSc7CiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvZmlsZUtleSxKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7CiAgYXBwbHlQcm9m' +
  'aWxlKCk7Y2xvc2VQcm9maWxlKCk7c2hvd1RvYXN0KCdQcm9maWwgdGVyc2ltcGFuIOKdpO+4jycpOwp9CgphcHBseVByb2ZpbGUoKTsKcmVuZGVyKCk7Cjwv' +
  'c2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD4=';

const CONFIG = {
  APP_NAME: 'Nabung Kita',
  OWNER_1: 'Iswandi',
  OWNER_2: 'Natasya',
  SHEETS: {
    PROFIL: 'PROFIL',
    TARGET: 'TARGET',
    TRANSAKSI: 'TRANSAKSI',
    PAYMENT: 'PAYMENT',
    SETTING: 'SETTING',
    LOG: 'LOG'
  }
};

function doGet(e) {
  // HTML V4 ditanam langsung di Code.gs dalam bentuk Base64.
  // Jadi cukup 1 file Apps Script untuk backend + tampilan aplikasi.
  const html = Utilities.newBlob(Utilities.base64Decode(HTML_B64))
    .getDataAsString('UTF-8');
  return HtmlService.createHtmlOutput(html)
    .setTitle(CONFIG.APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents
      ? JSON.parse(e.postData.contents)
      : {};
    return json_(route_(body));
  } catch (err) {
    return json_({ ok:false, error:String(err) });
  }
}

function route_(p) {
  setupDatabase_();

  switch (String(p.action || '').toLowerCase()) {
    case 'init':
      return getDashboard_();

    case 'dashboard':
      return getDashboard_();

    case 'profile':
      return saveProfile_(p);

    case 'profiles':
      return getProfiles_();

    case 'target':
      return saveTarget_(p);

    case 'targets':
      return getTargets_();

    case 'transaction':
      return addTransaction_(p);

    case 'transactions':
      return getTransactions_(p);

    case 'payment':
      return addPayment_(p);

    case 'payments':
      return getPayments_();

    case 'setting':
      return saveSetting_(p);

    default:
      return { ok:false, error:'Action tidak dikenal.' };
  }
}

/* =========================
   DATABASE SETUP
========================= */

function setupDatabase() {
  setupDatabase_();
  SpreadsheetApp.getActive().toast('Database Nabung Kita siap.');
  return 'OK';
}

function setupDatabase_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  createSheet_(ss, CONFIG.SHEETS.PROFIL, [
    'ID','Nama','FotoURL','Role','Aktif','UpdatedAt'
  ]);

  createSheet_(ss, CONFIG.SHEETS.TARGET, [
    'ID','NamaTarget','TargetNominal','TanggalTarget','Status','UpdatedAt'
  ]);

  createSheet_(ss, CONFIG.SHEETS.TRANSAKSI, [
    'ID','Tanggal','Nama','Jenis','Nominal','TargetID','Catatan','Status','CreatedAt'
  ]);

  createSheet_(ss, CONFIG.SHEETS.PAYMENT, [
    'ID','Tanggal','Nama','Nominal','Metode','Status','Catatan','CreatedAt'
  ]);

  createSheet_(ss, CONFIG.SHEETS.SETTING, [
    'Key','Value','UpdatedAt'
  ]);

  createSheet_(ss, CONFIG.SHEETS.LOG, [
    'ID','Tanggal','Action','User','Detail'
  ]);

  seed_();
}

function createSheet_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);

  if (sh.getLastRow() === 0) {
    sh.getRange(1,1,1,headers.length).setValues([headers]);
    sh.setFrozenRows(1);
    sh.getRange(1,1,1,headers.length)
      .setFontWeight('bold');
    sh.autoResizeColumns(1, headers.length);
  }
}

function seed_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const profil = ss.getSheetByName(CONFIG.SHEETS.PROFIL);
  if (profil.getLastRow() < 2) {
    profil.getRange(2,1,2,6).setValues([
      ['P001', CONFIG.OWNER_1, '', 'Partner', true, new Date()],
      ['P002', CONFIG.OWNER_2, '', 'Partner', true, new Date()]
    ]);
  }

  const target = ss.getSheetByName(CONFIG.SHEETS.TARGET);
  if (target.getLastRow() < 2) {
    target.appendRow([
      'T001',
      'Biaya Pernikahan',
      50000000,
      '',
      'Aktif',
      new Date()
    ]);
  }
}

/* =========================
   DASHBOARD
========================= */

function getDashboard_() {
  const profiles = getProfiles_().data;
  const targets = getTargets_().data;
  const transactions = getTransactions_({limit:50}).data;

  let total = 0;
  let iswandi = 0;
  let natasya = 0;

  transactions.forEach(t => {
    const amount = Number(t.Nominal) || 0;
    if (t.Jenis === 'NABUNG') {
      total += amount;
      if (t.Nama === CONFIG.OWNER_1) iswandi += amount;
      if (t.Nama === CONFIG.OWNER_2) natasya += amount;
    } else if (t.Jenis === 'PENGELUARAN') {
      total -= amount;
      if (t.Nama === CONFIG.OWNER_1) iswandi -= amount;
      if (t.Nama === CONFIG.OWNER_2) natasya -= amount;
    }
  });

  const target = targets.length ? Number(targets[0].TargetNominal) || 0 : 0;
  const progress = target ? Math.max(0, Math.min(100, total / target * 100)) : 0;

  return {
    ok:true,
    data:{
      profiles,
      targets,
      transactions,
      summary:{
        total:Math.max(0,total),
        iswandi:Math.max(0,iswandi),
        natasya:Math.max(0,natasya),
        target,
        remaining:Math.max(0,target-total),
        progress
      }
    }
  };
}

/* =========================
   PROFIL
========================= */

function getProfiles_() {
  return {
    ok:true,
    data:readObjects_(CONFIG.SHEETS.PROFIL)
  };
}

function saveProfile_(p) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.PROFIL);
  const id = p.id || findIdByName_(sh, p.nama) || uid_('P');

  const row = [
    id,
    p.nama || '',
    p.fotoURL || '',
    p.role || 'Partner',
    p.aktif !== false,
    new Date()
  ];

  upsertById_(sh, id, row);
  log_('PROFILE_UPDATE', p.nama || '', JSON.stringify(row));

  return {ok:true, data:row};
}

/* =========================
   TARGET
========================= */

function getTargets_() {
  return {
    ok:true,
    data:readObjects_(CONFIG.SHEETS.TARGET)
  };
}

function saveTarget_(p) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.TARGET);
  const id = p.id || uid_('T');

  const row = [
    id,
    p.namaTarget || 'Biaya Pernikahan',
    Number(p.targetNominal) || 0,
    p.tanggalTarget || '',
    p.status || 'Aktif',
    new Date()
  ];

  upsertById_(sh, id, row);
  log_('TARGET_UPDATE', p.namaTarget || '', JSON.stringify(row));

  return {ok:true, data:row};
}

/* =========================
   TRANSAKSI
========================= */

function addTransaction_(p) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.TRANSAKSI);

  const jenis = String(p.jenis || 'NABUNG').toUpperCase();
  if (!['NABUNG','PENGELUARAN'].includes(jenis)) {
    return {ok:false,error:'Jenis transaksi tidak valid.'};
  }

  const nominal = Number(p.nominal);
  if (!nominal || nominal <= 0) {
    return {ok:false,error:'Nominal harus lebih dari 0.'};
  }

  const nama = p.nama || CONFIG.OWNER_1;
  const id = uid_('TR');

  const row = [
    id,
    p.tanggal || new Date(),
    nama,
    jenis,
    nominal,
    p.targetID || 'T001',
    p.catatan || '',
    p.status || 'BERHASIL',
    new Date()
  ];

  sh.appendRow(row);
  log_('TRANSACTION', nama, JSON.stringify(row));

  return {ok:true,data:objectFromRow_(sh,row)};
}

function getTransactions_(p) {
  const all = readObjects_(CONFIG.SHEETS.TRANSAKSI);
  let data = all;

  if (p && p.nama) {
    data = data.filter(x => x.Nama === p.nama);
  }

  if (p && p.jenis) {
    data = data.filter(x => x.Jenis === String(p.jenis).toUpperCase());
  }

  data.sort((a,b) => new Date(b.Tanggal) - new Date(a.Tanggal));

  if (p && p.limit) {
    data = data.slice(0, Number(p.limit));
  }

  return {ok:true,data};
}

/* =========================
   PAYMENT
========================= */

function addPayment_(p) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.PAYMENT);
  const nominal = Number(p.nominal);

  if (!nominal || nominal <= 0) {
    return {ok:false,error:'Nominal pembayaran tidak valid.'};
  }

  const id = uid_('PAY');
  const row = [
    id,
    p.tanggal || new Date(),
    p.nama || CONFIG.OWNER_1,
    nominal,
    p.metode || 'QRIS BRI',
    p.status || 'MENUNGGU_KONFIRMASI',
    p.catatan || '',
    new Date()
  ];

  sh.appendRow(row);
  log_('PAYMENT', p.nama || '', JSON.stringify(row));

  return {ok:true,data:objectFromRow_(sh,row)};
}

function getPayments_() {
  return {ok:true,data:readObjects_(CONFIG.SHEETS.PAYMENT)};
}

/* =========================
   SETTINGS
========================= */

function saveSetting_(p) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.SETTING);
  if (!p.key) return {ok:false,error:'Key setting kosong.'};

  const row = [p.key, p.value || '', new Date()];
  const values = sh.getDataRange().getValues();

  for (let i=1;i<values.length;i++) {
    if (String(values[i][0]) === String(p.key)) {
      sh.getRange(i+1,1,1,3).setValues([row]);
      log_('SETTING_UPDATE', p.key, String(p.value || ''));
      return {ok:true,data:row};
    }
  }

  sh.appendRow(row);
  log_('SETTING_CREATE', p.key, String(p.value || ''));
  return {ok:true,data:row};
}

/* =========================
   HELPERS
========================= */

function readObjects_(sheetName) {
  const sh = SpreadsheetApp.getActive().getSheetByName(sheetName);
  if (!sh || sh.getLastRow() < 2) return [];

  const values = sh.getDataRange().getValues();
  const headers = values.shift();

  return values
    .filter(row => row.some(v => v !== ''))
    .map(row => {
      const obj = {};
      headers.forEach((h,i) => obj[h] = serialize_(row[i]));
      return obj;
    });
}

function objectFromRow_(sh,row) {
  const headers = sh.getRange(1,1,1,row.length).getValues()[0];
  const obj = {};
  headers.forEach((h,i) => obj[h] = serialize_(row[i]));
  return obj;
}

function serialize_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss");
  return v;
}

function upsertById_(sh,id,row) {
  const values = sh.getDataRange().getValues();
  for (let i=1;i<values.length;i++) {
    if (String(values[i][0]) === String(id)) {
      sh.getRange(i+1,1,1,row.length).setValues([row]);
      return;
    }
  }
  sh.appendRow(row);
}

function findIdByName_(sh,name) {
  if (!name || sh.getLastRow() < 2) return '';
  const values = sh.getRange(2,1,sh.getLastRow()-1,2).getValues();
  for (const r of values) {
    if (String(r[1]).toLowerCase() === String(name).toLowerCase()) return r[0];
  }
  return '';
}

function uid_(prefix) {
  return prefix + '-' + Utilities.getUuid().replace(/-/g,'').slice(0,12).toUpperCase();
}

function log_(action,user,detail) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.LOG);
  if (sh) sh.appendRow([uid_('LOG'),new Date(),action,user,detail]);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
