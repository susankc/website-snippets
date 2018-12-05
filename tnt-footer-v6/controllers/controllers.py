# -*- coding: utf-8 -*-
from odoo import http

# class Tnt-footer-v1(http.Controller):
#     @http.route('/tnt-footer-v1/tnt-footer-v1/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tnt-footer-v1/tnt-footer-v1/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('tnt-footer-v1.listing', {
#             'root': '/tnt-footer-v1/tnt-footer-v1',
#             'objects': http.request.env['tnt-footer-v1.tnt-footer-v1'].search([]),
#         })

#     @http.route('/tnt-footer-v1/tnt-footer-v1/objects/<model("tnt-footer-v1.tnt-footer-v1"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tnt-footer-v1.object', {
#             'object': obj
#         })